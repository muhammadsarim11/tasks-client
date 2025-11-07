import { motion } from "framer-motion";
import profileImage from "@/assets/profile-smiling.png";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen pt-20 bg-accent/30 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-black text-primary leading-tight tracking-tight"
            >
              BREAK THROUGH
              <br />
              YOUR LIMITATIONS!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-primary/80 leading-relaxed"
            >
              I help frum working men build strength, lose/gain weight, and help guide them to a life with more success.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-6 rounded-lg transition-all"
              >
                Book a Free Call
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-md ml-auto">
              <img
                src={profileImage}
                alt="Eliyahu Frost"
                className="relative z-10 w-full h-auto"
              />
              <div className="absolute bottom-8 right-0 bg-primary text-white px-6 py-4 z-20">
                <p className="text-2xl font-bold">Eliyahu Frost</p>
                <p className="text-sm uppercase tracking-wider">Certified Trainer and Life Coach</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
