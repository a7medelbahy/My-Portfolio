import { SocialItems } from "../data";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <ul className="m-0 p-0 d-flex justify-content-center justify-content-lg-start align-items-center gap-3">
        {SocialItems.map((socialItem) => {
          return (
            <li key={socialItem.id}>
              <a
                className="fs-5"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${socialItem.color}` }}
                href={socialItem.link}
              >
                {socialItem.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialIcons;
