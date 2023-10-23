import React from "react";
import NavItem from "./navItem";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar() {
  // const { scrollYProgress } = useScroll();

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });

  return (
    <motion.div
      id="nav-bar"
      className="navbar sticky inset-y-0 ml-20 pt-40 text-lg font-inter"
      // style={{ opacity: scrollYProgress }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: "all" }}
      transition={{ duration: 1 }}
    >
      <motion.ul className="cursor-pointer gap-y-40 grid grid-cols-1 w-full">
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
      </motion.ul>
    </motion.div>
  );
}
