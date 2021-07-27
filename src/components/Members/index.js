import "./index.css";

import { FaLinkedin } from "react-icons/fa";

const Member = ({ photo, name, designation, link }) => {
  return (
    <div className="membersContainer">
      <div className="memberCard">
        <img src={photo} alt="photos" />
        <div className="memberDetails">
          <p>{name}</p>
          <p>{designation}</p>
          <p className="socialLink">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="socialLinkIcon" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Member;
