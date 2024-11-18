import { motion, useScroll } from "framer-motion";

export const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-2 origin-left bg-primary bg-gradient-to-r from-accent to-info"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
};
