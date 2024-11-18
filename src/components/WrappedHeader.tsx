import { motion, useInView } from "motion/react";
import { Link } from "@tanstack/react-router";
import GithubIcon from "../assets/github-mark-white.svg";
export const WrappedHeader = ({ refDiv }: any) => {
  const isInView = useInView(refDiv, { amount: 0.5 });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -150 }}
      transition={{ duration: 0.5, damping: 10, delay: 0, ease: "easeInOut" }}
      className="align-left fixed left-0 right-0 top-0 mx-5 flex select-none items-center justify-center py-5 font-bold text-accent sm:mx-16 sm:py-12 sm:text-3xl md:text-4xl xl:mx-80"
    >
      <span>
        <Link
          href="/"
          className="bg-gradient-to-r from-info to-accent bg-clip-text leading-normal text-transparent"
        >
          ericzhang.dev
        </Link>
      </span>
      <nav className="ml-auto flex items-center space-x-8">
        <Link href="/projects">projects</Link>
        <Link href="/blog">blog</Link>
        <a href="https://github.com/HiddenAbilitree">
          <img
            className="h-6 w-6 sm:h-8 sm:w-8"
            src={GithubIcon}
            alt="Github"
          />
        </a>
      </nav>
    </motion.div>
  );
};
