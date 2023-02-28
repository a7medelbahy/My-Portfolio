import { ServicesData } from "../../data";
import WhatIDoBox from "./WhatIDoBox";

const WhatIDo = () => {
  return (
    <div className="what-i-do">
      <h3 className="main-title">What I Do</h3>
      <div className="row g-5 align-items-center justify-content-center text-center">
        {ServicesData.map((serviceBox) => {
          return <WhatIDoBox key={serviceBox.id} serviceBox={serviceBox} />;
        })}
      </div>
    </div>
  );
};

export default WhatIDo;
