import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import jumpingImage from "@/assets/jumping-celebration.png";
import steakImage from "@/assets/steak-dinner.png";
import jumpingSuitImage from "@/assets/jumping-suit.png";
import { Button } from "@/components/ui/button";

const steps = [
  {
    image: jumpingImage,
    title: "FITNESS TRAINING",
    description: "Build muscle, lose weight, get stronger."
  },
  {
    image: steakImage,
    title: "NUTRITION COACHING",
    description: "Simple meal plans that work with your life."
  },
  {
    image: jumpingSuitImage,
    title: "MINDSET WORK",
    description: "Stay consistent. Break through what's stopping you."
  }
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 bg-secondary/40">
      <div className="container max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-primary mb-4"
        >
          Ready to see <span className="font-black">transformation</span>?
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="border-2 border-dashed border-primary rounded-2xl p-6 bg-white h-[280px] flex items-center justify-center mb-4">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <Button 
                className="w-full mb-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg"
              >
                LEARN MORE
              </Button>
              <h3 className="text-center text-sm font-bold text-primary uppercase mb-2">
                {step.title}
              </h3>
              <p className="text-center text-sm text-primary/70">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8 text-primary font-semibold italic text-sm"
        >
          SESSIONS ARE 60 MINUTES. IN-PERSON (TELZ-STONE/JERUSALEM), ZOOM, OR OUTDOORS.
        </motion.p>
      </div>
    </section>
  );
};
