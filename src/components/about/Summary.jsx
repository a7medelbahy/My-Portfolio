import MyCv from '../../assets/Ahmed Elbahy.pdf'

const Summary = () => {
  return (
    <div className="summary position-relative">
      <h3 className="main-title">Summary</h3>
      <div className="row g-5 justify-content-center justify-content-md-start text-center text-md-start align-items-center">
        <div className="col-md-8">
          <p className="">
            Hi, my name is Ahmed Elbahy. I’m Fresh graduated electrical power
            engineer. Studied front-end web development and have built more than
            10 websites some were with pure HTML, CSS, Java Script and some with
            frameworks like Bootstrap and React JS. Able to effectively
            self-manage during independent projects, as well as collaborate in a
            team setting. Always ambitious.
          </p>
        </div>
        <div className="col-md-4">
          <a href={MyCv} download className="main-btn">
            <span className="btn-name">download cv</span>
            <span className="btn-icon">
              <i className="fa-solid fa-download"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Summary;
