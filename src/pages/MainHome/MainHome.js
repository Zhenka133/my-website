import React from "react";
import { motion } from "framer-motion";
import About from "../../sections/About";
import Experience from "../../sections/Experience";
import Projects from "../../sections/Projects";
import Contact from "../../sections/Contact";

const MainHome = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <About />
      <Experience />
      <Projects />
      <Contact />
    </motion.main>
  );
};

export default MainHome;
