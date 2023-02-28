import { motion } from "framer-motion";

const ProjectBox = (props) => {
  return (
    <motion.div
      className="col-md-6 col-lg-4"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "twem",
        duration: 1,
        delay: 0.3,
      }}
    >
      <div className="project-box d-flex justify-content-center align-items-center flex-column gap-5 text-center rounded overflow-hidden">
        <div className="project-img h-100">
          <img
            src={props.projectBox?.img}
            className="img-fluid w-100 h-100 d-block"
            alt={props.projectBox.title}
          />
        </div>
        <div className="project-info p-3 justify-content-center d-flex flex-column gap-3 justify-content-center align-items-center">
          <h4 className="fw-bold">{props.projectBox.title}</h4>
          <small className="fw-bold">{props.projectBox.desc}</small>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <a
              href={props.projectBox.source}
              target="_blank"
              rel="noreferrer"
              className="btn main-btn"
            >
              <span className="btn-name">Source</span>
              <span className="btn-icon">
                <i className="fa-solid fa-laptop-code"></i>
              </span>
            </a>
            <a
              href={props.projectBox.demo}
              target="_blank"
              rel="noreferrer"
              className="btn main-btn"
            >
              <span className="btn-name">Demo</span>
              <span className="btn-icon">
                <i className="fa-solid fa-laptop-code"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectBox;
