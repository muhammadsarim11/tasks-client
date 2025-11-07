import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import profileCrossedArms from "@/assets/profile-crossed-arms.png";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="container max-w-4xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <img
              src={profileCrossedArms}
              alt="Eliyahu Frost"
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Book a free 15-minute call.
            </h2>

            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-12 py-6 rounded-lg"
            >
              Schedule now
            </Button>

            <div className="pt-4 border-t border-primary/20">
              <p className="text-sm font-bold text-primary mb-2">CERTIFIED PERSONAL TRAINER & LIFE COACH</p>
              <div className="flex gap-4 text-sm">
                <a href="#" className="text-primary hover:text-primary/70 font-semibold">[WHATSAPP]</a>
                <span className="text-primary/40">|</span>
                <a href="#" className="text-primary hover:text-primary/70 font-semibold">[EMAIL]</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
