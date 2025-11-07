import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileOutdoor from "@/assets/profile-outdoor.png";
import { Check } from "lucide-react";

const reasons = [
  "10+ years of elite fitness & nutrition experience",
  "Worked with 500+ successful transformations",
  "Evidence-based approach backed by science",
  "Personalized plans tailored to your lifestyle",
  "24/7 support and accountability",
  "Results guaranteed or money back"
];

export const WhyMeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 bg-card">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              <div className="absolute -inset-4 bg-accent rounded-3xl blur-2xl opacity-20" />
              <img
                src={profileOutdoor}
                alt="Eliyahu Frost"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-primary mb-4"
              >
                WHY <span className="text-accent">ME</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-muted-foreground"
              >
                Hi! I'm Eliyahu Frost, your transformation partner
              </motion.p>
            </div>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground">{reason}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
