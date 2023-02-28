import "./home.css";

import { motion } from "framer-motion";
import HomeImg from "./HomeImg";
import HomeText from "./HomeText";
const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="container">
        <div className="section d-flex justify-content-center align-items-center">
          <div className="row g-5 align-items-center justify-content-center">
            <HomeText />
            <HomeImg />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
