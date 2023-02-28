import { motion } from "framer-motion";

const WhatIDoBox = (props) => {
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
      <div className="service-box p-3 d-flex justify-content-center align-items-center flex-column gap-5 text-center rounded-4 overflow-hidden">
        <h2 className="display-4">{props.serviceBox.icon}</h2>
        <h4>{props.serviceBox.title}</h4>
        <div className="service-info p-3 d-flex justify-content-center align-items-center">
          {props.serviceBox.desc}
        </div>
      </div>
    </motion.div>
  );
};

export default WhatIDoBox;
