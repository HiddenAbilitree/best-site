import { createLazyFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import { WrappedHeader } from "../components/WrappedHeader";
import { useRef } from "react";
import { ProgressBar } from "../components/ProgressBar";

const Big = ({ text }: { text: string }) => {
  const ref = useRef(null);
  const isVisible = useInView(ref, {
    amount: 1,
    margin: "-300px 0px -300px 0px",
  });
  return (
    <motion.div
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.25, delay: 0 }}
      className="flex h-[90vh] items-center justify-center text-4xl font-extrabold text-info md:text-5xl lg:text-6xl xl:text-7xl"
    >
      <span className="sticky top-1/2" ref={ref}>
        {text}
      </span>
    </motion.div>
  );
};

const App = () => {
  const bodyRef = useRef(null);
  const isVisible = useInView(bodyRef, {
    amount: 0.5,
    once: false,
  });
  return (
    <>
      <ProgressBar />
      <WrappedHeader refDiv={bodyRef} />
      <Big text="Hello There" />

      <motion.div
        ref={bodyRef}
        className="mx-5 flex h-screen flex-col items-center justify-center space-y-5 text-white sm:mx-16 sm:py-12 xl:mx-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -150 }}
        transition={{ duration: 0.5, damping: 10, delay: 0, ease: "easeInOut" }}
      >
        <span className="text-foreground text-center text-3xl font-bold">
          Hi. I'm Eric Zhang, a Computer Science student at George Mason
          University.
        </span>
        <span className="text-foreground text-justify text-xl font-bold"></span>
      </motion.div>
    </>
  );
};

export const Route = createLazyFileRoute("/")({
  component: App,
});
