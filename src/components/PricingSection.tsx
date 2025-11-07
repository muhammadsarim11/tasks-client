import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$497",
    period: "/month",
    features: [
      "Custom nutrition plan",
      "Weekly check-ins",
      "Email support",
      "Progress tracking"
    ],
    popular: false
  },
  {
    name: "Elite",
    price: "$897",
    period: "/month",
    features: [
      "Everything in Starter",
      "Personalized training program",
      "Daily support",
      "Video form checks",
      "Supplement guidance"
    ],
    popular: true
  },
  {
    name: "VIP",
    price: "$1,497",
    period: "/month",
    features: [
      "Everything in Elite",
      "24/7 priority support",
      "Weekly video calls",
      "Lifestyle optimization",
      "Mindset coaching"
    ],
    popular: false
  }
];

export const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-primary mb-4"
        >
          Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-muted-foreground mb-16 text-lg"
        >
          Choose the plan that fits your ambition
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-primary text-primary-foreground shadow-2xl scale-105"
                  : "bg-card shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary px-6 py-2 rounded-full font-semibold text-sm">
                  Most Popular
                </div>
              )}
              
              <div className="space-y-6">
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-primary-foreground" : "text-primary"}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-bold ${plan.popular ? "text-accent" : "text-primary"}`}>
                      {plan.price}
                    </span>
                    <span className={plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.popular ? "bg-accent" : "bg-accent"
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? "text-primary" : "text-primary"}`} />
                      </div>
                      <span className={plan.popular ? "text-primary-foreground" : "text-foreground"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular
                      ? "bg-accent hover:bg-accent/90 text-primary"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  } rounded-full py-6 font-semibold`}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
