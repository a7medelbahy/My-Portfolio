import PricingPlans from "./PricingPlans";
import WhatIDo from "./WhatIDo";
import { motion } from "framer-motion";
import "./services.css";

const Services = () => {
  return (
    <motion.div
      className="services"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="container">
        <div className="section d-flex flex-column gap-3">
          <WhatIDo />
          <div className="section-divider"></div>
          <PricingPlans />
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
