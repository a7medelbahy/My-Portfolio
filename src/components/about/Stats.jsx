import { StaticsAbout } from "../../data";

const Stats = () => {
  return (
    <div className="stats py-4">
      <div className="row g-4">
        {StaticsAbout.map((statBox) => {
          return (
            <div key={statBox.id} className="col-6 col-md-4 col-lg-3">
              <div className="stat-box text-center d-flex flex-column gap-3 align-items-center">
                <div className="stat-icon d-flex justify-content-center align-items-center">
                  <img
                    src={statBox.icon}
                    alt="stat icon"
                    className="img-fluid w-100 d-block"
                    title={statBox.title}
                  />
                </div>
                <div className="stat-info">
                  <h4 className="display-5 fw-bold">{statBox.num}</h4>
                  <p>{statBox.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
