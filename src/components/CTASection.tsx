import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import profileCrossedArms from "@/assets/profile-crossed-arms.png";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 bg-primary">
      <div className="container max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden"
        >
          <img
            src={profileCrossedArms}
            alt="Eliyahu Frost"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6"
        >
          Ready to Transform?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto"
        >
          Book a free 15-minute call to discuss your goals and see if we're a good fit
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-primary font-semibold px-12 py-6 text-lg rounded-full"
          >
            Book a Free 15-Minute Call
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-primary-foreground/60 text-sm"
        >
          No pressure, no commitment. Just an honest conversation about your goals.
        </motion.p>
      </div>
    </section>
  );
};
