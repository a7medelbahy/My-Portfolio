import { ContactInfoData } from "../../data";
import SocialIcons from "../SocialIcons";

const ContactInfo = () => {
  return (
    <div className="col-lg-4" data-aos="fade-down" data-aos-duration="1000">
      <div className="contact-info d-flex flex-column gap-4">
        <div className="introduction">
          <h4>DON'T BE SHY !</h4>
          <p>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
        </div>
        <div className="info-content d-flex flex-column gap-4">
          {ContactInfoData.map((contactBox) => {
            return (
              <div
                key={contactBox.id}
                className="contact-box d-flex gap-3 flex-wrap align-items-center"
              >
                <div className="info-icon">{contactBox.icon}</div>
                <div className="info-data">
                  <h5>{contactBox.title}</h5>
                  <a href={contactBox.link} target="_blank" rel="noreferrer">
                    {contactBox.info}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <SocialIcons />
      </div>
    </div>
  );
};

export default ContactInfo;
