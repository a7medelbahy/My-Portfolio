import { SoftSkillsData } from "../../data";
const SoftSkills = () => {
  return (
    <div className="col-md-6">
      <h3 className="main-title">Soft Skills</h3>
      <div className="soft-skills rounded-4 p-4 d-flex justify-content-start gap-2 gap-lg-4 flex-wrap">
        {SoftSkillsData.map((item) => {
          return (
            <span key={item.id} className="rounded-2 p-2">
              {item.title}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SoftSkills;
