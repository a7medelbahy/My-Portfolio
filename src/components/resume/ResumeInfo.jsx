import { ResumeData } from "../../data";
import ResumeBox from "./ResumeBox";

const ResumeInfo = () => {
  return (
    <div className="resume-info">
      <h3 className="main-title">Resume</h3>
      <div className="row gy-5">
        <div className="col-lg-6">
          {ResumeData.slice(0, 3).map((resumeItem) => {
            return (
              <div key={resumeItem.id}>
                <div className="resume-box mb-5">
                  <h4 className="resume-heading ps-4 mb-4">
                    {resumeItem.heading}
                  </h4>
                  <div className="content ps-4 d-flex flex-column gap-4">
                    {resumeItem.info.map((resumeBox) => {
                      return (
                        <ResumeBox key={resumeBox.id} resumeBox={resumeBox} />
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-lg-6">
          <div className="resume-box">
            <h4 className="resume-heading ps-4 mb-4">
              {ResumeData[3].heading}
            </h4>
            <div className="content ps-4 d-flex flex-column gap-4">
              {ResumeData[3].info?.map((resumeBox) => {
                return <ResumeBox key={resumeBox.id} resumeBox={resumeBox} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeInfo;
