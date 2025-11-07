import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileOutdoor from "@/assets/profile-outdoor.png";

export const WhyMeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-6xl font-black text-primary mb-2">
              WHY
            </h2>
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              <span className="text-accent">WITH</span> ME
            </h2>

            <div className="border-2 border-dashed border-primary rounded-2xl p-8 bg-white relative">
              <p className="text-primary font-semibold mb-4">I'm Eli Frost</p>
              <p className="text-primary/80 leading-relaxed mb-4">
                Certified Trainer and life coach. I've worked with hundreds of frum working men, businessmen, and fathers who thought they had no time.
              </p>
              <p className="text-primary/80 leading-relaxed">
                I help Jewish men meet results their bodies as an act of avodah.
              </p>
              <p className="text-primary/80 leading-relaxed mt-4">
                Because taking care of yourself isn't selfish—it's a mitzvah.
              </p>
              
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                <div className="flex flex-col items-center">
                  <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-primary"></div>
                  <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-primary mt-1"></div>
                  <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-primary mt-1"></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-md ml-auto">
              <div className="absolute -top-8 -right-8 text-8xl font-black text-primary z-0" style={{ fontFamily: 'Impact, sans-serif' }}>
                HI!
              </div>
              <div className="relative border-8 border-accent rounded-3xl overflow-hidden">
                <img
                  src={profileOutdoor}
                  alt="Eliyahu Frost"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
