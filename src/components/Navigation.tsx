import { motion } from "framer-motion";

export const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" />
            </svg>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#home" className="text-primary font-semibold tracking-wider text-sm hover:text-primary/70 transition-colors">
            HOME
          </a>
          <span className="text-primary">|</span>
          <a href="#services" className="text-primary font-semibold tracking-wider text-sm hover:text-primary/70 transition-colors">
            SERVICES
          </a>
          <span className="text-primary">|</span>
          <a href="#about" className="text-primary font-semibold tracking-wider text-sm hover:text-primary/70 transition-colors">
            ABOUT
          </a>
          <span className="text-primary">|</span>
        </div>
      </div>
    </motion.nav>
  );
};
