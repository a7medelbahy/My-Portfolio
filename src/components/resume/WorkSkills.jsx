import { SkillsData } from "../../data";

const WorkSkills = () => {
  return (
    <div className="col-md-6">
      <h3 className="main-title">Programming Skills</h3>
      <div className="work-skills rounded-4 p-4 d-flex flex-column gap-3">
        {SkillsData.map((item) => {
          return (
            <div className="skill-box" key={item.id}>
              <h6 className="skill-title">{item.title}</h6>
              <div className="progress rounded-3" style={{ height: "20px" }}>
                <div
                  className="progress-bar rounded-3 p-2"
                  role="progressbar"
                  style={{ width: `${item.rate}%` }}
                  aria-label="Example with label"
                  aria-valuenow={item.rate}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {item.rate}%
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkSkills;
