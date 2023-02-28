import PersonalImg from "../../assets/IMG_4044.jpg";
import { PersonalInformation } from "../../data";

const Personal = () => {
  return (
    <div className="personal">
      <h3 className="main-title">Personal Information</h3>
      <div className="row g-5 mt-4 align-items-center">
        <div className="col-md-6 col-lg-5">
          <div className="personal-img position-relative">
            <img
              src={PersonalImg}
              className="img-fluid d-block"
              alt="Ahmed ELbahy"
              title="Ahmed Elbahy"
            />
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="row g-4">
            {PersonalInformation.map((item) => {
              return (
                <div key={item.id} className="col-sm-6">
                  <div className="info d-flex flex-wrap gap-2 align-items-center justify-content-center text-center justify-content-sm-start text-sm-start">
                    <small>{item.title}: </small>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
