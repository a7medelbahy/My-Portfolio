import "./projects.css";
import { ProjectsData } from "../../data";
import ProjectBox from "./ProjectBox";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      className="projects"
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
          <h3 className="main-title">Completed Projects</h3>
          <div className="row g-5 justify-content-center align-items-center">
            {ProjectsData.map((projectBox) => {
              return <ProjectBox key={projectBox.id} projectBox={projectBox} />;
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
