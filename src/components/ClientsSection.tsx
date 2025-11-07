import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jake Larson",
    role: "CEO, Tech Startup",
    content: "Lost 30 lbs in 12 weeks while building my company. Eliyahu's approach made it sustainable and actually enjoyable.",
    rating: 5
  },
  {
    name: "David Cohen",
    role: "Investment Banker",
    content: "Finally found a coach who understands the demands of a high-pressure career. Down 25 lbs and feeling incredible.",
    rating: 5
  }
];

export const ClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 bg-primary">
      <div className="container max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-primary-foreground mb-16"
        >
          Clients
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card/10 backdrop-blur-sm rounded-3xl p-8 space-y-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-primary-foreground text-lg leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <p className="text-accent font-semibold">{testimonial.name}</p>
                <p className="text-primary-foreground/70 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
