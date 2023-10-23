import React from "react";
import NavItem from "./navItem";
import { motion } from "framer-motion";

export default function Navbar() {
  // const { scrollYProgress } = useScroll();

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });

  return (
    <motion.div
      id="nav-bar"
      className="navbar sticky mt-20 mb-20 inset-y-0 text-lg font-inter"
      // style={{ opacity: scrollYProgress }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: "some" }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="cursor-pointer px-10 h-full w-full"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        {/* To add border use 'border-l-4 border-transparent border-blue-400' */}
        {/* <NavItem title="HOME" scrollspyId="section_1" active={true}></NavItem> */}
        <NavItem
          title="ABOUT ME"
          scrollspyId="section_2"
          active={false}
        ></NavItem>
        <NavItem
          title="PROJECTS"
          scrollspyId="section_3"
          active={false}
        ></NavItem>
        <NavItem
          title="CONTACT"
          scrollspyId="section_4"
          active={false}
        ></NavItem>
      </motion.div>
    </motion.div>
  );
}
