import SoftSkills from "./SoftSkills";
import ResumeInfo from "./ResumeInfo";
import WorkSkills from "./WorkSkills";
import { motion } from "framer-motion";
import "./resume.css";

const Resume = () => {
  return (
    <motion.div
      className="resume"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="container">
        <div className="section">
          <ResumeInfo />
          <div className="section-divider my-4"></div>
          <div className="row g-5">
            <WorkSkills />
            <SoftSkills />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
