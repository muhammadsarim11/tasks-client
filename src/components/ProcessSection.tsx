import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import jumpingImage from "@/assets/jumping-celebration.png";
import steakImage from "@/assets/steak-dinner.png";
import jumpingSuitImage from "@/assets/jumping-suit.png";

const steps = [
  {
    image: jumpingImage,
    title: "Ready to eat it",
    subtitle: "healthy/shredded?",
    description: "Get a personalized nutrition plan that fits your lifestyle"
  },
  {
    image: steakImage,
    title: "Eat Smart,",
    subtitle: "Stay Lean",
    description: "Enjoy delicious meals while achieving your goals"
  },
  {
    image: jumpingSuitImage,
    title: "Transform",
    subtitle: "Your Life",
    description: "See real results and feel amazing every day"
  }
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-primary mb-16"
        >
          Ready to eat it <span className="text-accent">healthy/shredded?</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center space-y-4"
            >
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-10" />
                <img
                  src={step.image}
                  alt={step.title}
                  className="relative z-10 w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary">
                {step.title}
                <span className="block text-accent">{step.subtitle}</span>
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
