import { motion } from "motion/react";
import { fadeInRight } from "../data/variants";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeInRight}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="bg-neutral-950 border-t border-neutral-600 text-neutral-100 text-center py-6 "
    >
      <p className="text-sm">
        &copy; {new Date().getFullYear()} John Doe. All rights reserved.{" "}
        {/*Replace 'John Doe' with your actual name*/}
      </p>
    </motion.footer>
  );
};

export default Footer;
