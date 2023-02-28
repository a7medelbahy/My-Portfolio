import { Typewriter } from "react-simple-typewriter";
import SocialIcons from "../SocialIcons";
import { motion } from "framer-motion";

const HomeText = () => {
  return (
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
          I am a creative front-end web developer. I can provide clean code and
          pixel perfect design. I also make website more & more interactive with
          web animations.
        </p>
        <SocialIcons />
      </div>
    </motion.div>
  );
};

export default HomeText;
