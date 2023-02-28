const ResumeBox = (props) => {
  return (
    <div className="resumeInfo-box rounded p-3">
      <h5 className="resume-title">{props.resumeBox.title}</h5>
      <small className="resume-date fw-bold">{props.resumeBox.time}</small>
      <p className="resume-detail mt-3">{props.resumeBox.detail1}</p>
      <p className="resume-desc fw-bold">{props.resumeBox.detail2}</p>
    </div>
  );
};

export default ResumeBox;
