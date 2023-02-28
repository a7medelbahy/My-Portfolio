import { PricingData } from "../../data";
import PricingPlansBox from "./PricingPlansBox";

const PricingPlans = () => {
  return (
    <div className="pricing-plans">
      <h3 className="main-title">Pricing Plans</h3>
      <div className="row g-5 justify-content-center align-items-center">
        {PricingData.map((pricePlanBox) => {
          return (
            <PricingPlansBox
              key={pricePlanBox.id}
              pricePlanBox={pricePlanBox}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PricingPlans;
