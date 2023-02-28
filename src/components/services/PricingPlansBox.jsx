import { motion } from "framer-motion";

const PricingPlansBox = (props) => {
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
      <div className="plan-box rounded-3 overflow-hidden d-flex flex-column gap-4 align-items-center justify-content-center text-center">
        <div className="price-box p-4 text-center d-flex flex-column align-items-center justify-content-center">
          <h4 className="text-white fw-bolder">{props.pricePlanBox.title}</h4>
          <h3 className="my-3 rounded-circle d-flex align-items-center justify-content-center">
            {props.pricePlanBox.icon}
          </h3>
          <p>
            <sup>$</sup>
            {props.pricePlanBox.price}{" "}
            <sub className="text-white-50">/Month</sub>
          </p>
        </div>
        <ul className="plan-features d-flex flex-column gap-3 text-center">
          {props.pricePlanBox.features.map((featItem) => {
            return <li key={featItem.id}>{featItem.feature}</li>;
          })}
        </ul>
        <button className="main-btn my-4">
          <span className="btn-name">Choose Plan</span>
          <span className="btn-icon">
          <i class="fa-solid fa-handshake-simple"></i>
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default PricingPlansBox;
