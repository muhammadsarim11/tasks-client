import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "SILVER PLAN",
    price: "1,800 NIS/MONTH",
    tagline: "GET STARTED COACHING",
    features: [
      "60MIN 2X/EPI",
      "FULL MEAL PLAN WITH RECIPES + LISTS WITH SHOPPING LISTS",
      "PERSONAL 1:1 TRAINING",
      "TRACK PROGRESS",
      "EXERCISES TO KEEP YOU ON TRACK",
      "CONSISTENT COACHING WITHOUT JUDGEMENT"
    ]
  },
  {
    name: "GOLD PLAN",
    price: "2,500 NIS/MONTH",
    tagline: "ACCELERATE THE PROCESS",
    features: [
      "60 MIN 3X/EPI",
      "EVERYTHING IN SILVER PLUS...",
      "MEAL PLANNING",
      "TRACKING WORKOUT (AS WELL AS FOOD)",
      "PERSONAL SETS MADE OF WORKOUT TOWARDS IT OR WITH A FOOD PREP",
      "PRIORITY CALL RESPONSE (WHEN NOT SLEEPING & STILL RELEVANT TO TRAINING, NUTRITION & MINDSET)"
    ],
    popular: true
  },
  {
    name: "PLATINUM PLAN",
    price: "4,000 NIS/MONTH",
    tagline: "SERIOUS RESULTS",
    features: [
      "60 MIN 5X/EPI",
      "EVERYTHING IN GOLD PLAN, PLUS...",
      "NEW WORKOUT PROGRAMS (BASED ON GOALS OR SEASON)",
      "MEAL PLANNING AND RECIPES MADE DAILY (UNIQUE MADE DAILY RECIPES)",
      "SUPPORT",
      "PRIORITY 24H READY TO CALL BACK (TEXT OR CALL), AND ONLY POSITIVE COMMITMENT"
    ]
  }
];

export const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 bg-accent/30">
      <div className="container max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-center text-white mb-16"
        >
          Pricing
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`bg-white rounded-2xl p-6 shadow-lg ${
                plan.popular ? "ring-4 ring-primary scale-105" : ""
              }`}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-black text-primary mb-2 uppercase">
                  {plan.name}
                </h3>
                <p className="text-3xl font-bold text-primary mb-2">{plan.price}</p>
                <p className="text-xs text-primary/60 uppercase font-semibold">{plan.tagline}</p>
              </div>

              <ul className="space-y-2 mb-6 min-h-[280px]">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs">
                    <div className="mt-0.5 flex-shrink-0 w-3 h-3 rounded-full bg-primary flex items-center justify-center">
                      <Check className="w-2 h-2 text-white" />
                    </div>
                    <span className="text-primary/80 leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold"
              >
                Book a Free Call
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
