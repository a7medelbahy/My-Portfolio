import { motion } from "framer-motion";
import IntroImg from "../../assets/me.jpg";
import SquareImg from "../../assets/square.png";

const HomeImg = () => {
    return ( 
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
                  src={IntroImg}
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
     );
}
 
export default HomeImg;