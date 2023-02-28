import "./home.css";
import HomeImg from "../../assets/me.jpg";
import SquareImg from "../../assets/square.png";
import { Typewriter } from "react-simple-typewriter";
import SocialIcons from "../SocialIcons";
import { motion } from "framer-motion";

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
            <motion.div
              className="col-lg-6 order-2 order-lg-0"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "twem",
                duration: 1,
                delay: 0.3,
              }}
            >
              <div className="home-content p-3 text-center text-md-start">
                <div className="name d-flex justify-content-center justify-content-md-start flex-wrap align-items-center gap-3">
                  <h1 className="fw-bolder">- I'M</h1>
                  <div>
                    <h2 className="my-name">AHMED ELBAHY</h2>
                    <h3 className="my-title">
                      <span className="me-2">A</span>
                      <Typewriter
                        words={[
                          "Web Develpoer",
                          "Front-End Develpoer",
                          "React JS Develpoer",
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={60}
                        delaySpeed={2000}
                      />
                    </h3>
                  </div>
                </div>
                <p className="my-4">
                  I am a creative front-end web developer. I can provide clean
                  code and pixel perfect design. I also make website more & more
                  interactive with web animations.
                </p>
                <SocialIcons />
              </div>
            </motion.div>
            <motion.div
              className="col-lg-5 offset-lg-1 order-1 order-lg-1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "twem",
                duration: 1,
                delay: 0.3,
              }}
            >
              <div className="home-img rounded-circle position-relative">
                <img
                  src={HomeImg}
                  className="img-fluid w-100 d-block p-1 rounded-circle"
                  alt="my img"
                  title="Ahmed Elbahy"
                />
                <div className="circle"></div>
                <div className="circle-2"></div>
                <div className="circle-3"></div>
                <div className="square-shape">
                  <img
                    src={SquareImg}
                    className="img-fluid w-100 d-block"
                    alt="square shape"
                    title="square-shape"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
