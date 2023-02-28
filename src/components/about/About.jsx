import "./about.css";
import Personal from "./Personal";
import Stats from "./Stats";
import Summary from "./Summary";
import Testimonials from "./Testimonials";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="container">
        <div className="section d-flex flex-column gap-3">
          <Summary />
          <div className="section-divider"></div>
          <Personal />
          <div className="section-divider"></div>
          <Stats />
          <div className="section-divider"></div>
          <Testimonials />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
