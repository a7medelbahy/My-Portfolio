import { useState } from "react";
import "./theme.css";
import ThemeColor from "./ThemeColor";
import ThemeMode from "./ThemeMode";
import { motion } from "framer-motion";

const Theme = () => {
  const [expandNav, setExpandNav] = useState();
  return (
    <motion.div
      className="theme-list position-fixed top-0 d-flex align-items-start justify-content-start"
      initial={{ x: ["100%"] }}
      animate={{ x: 0 }}
      transition={{
        type: "twem",
        duration: 1,
      }}
    >
      <button
        className="d-block fs-5 fw-bold d-lg-none expand-nav-btn rounded-3 px-2 mt-2 me-2"
        onClick={() => setExpandNav((prev) => !prev)}
      >
        {expandNav ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-palette"></i>
        )}
      </button>
      <div
        className={
          expandNav
            ? "theme-list-container d-block"
            : "theme-list-container d-none d-lg-block"
        }
      >
        <div className="theme-list-container d-flex flex-column gap -3 justify-content-between align-items-center p-3">
          <div className="theme-mode">
            <p className="main-title">Theme:</p>
            <ThemeMode />
            <div className="section-divider"></div>
          </div>
          <div className="theme-color">
            <p className="main-title">Color:</p>
            <ThemeColor />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Theme;
