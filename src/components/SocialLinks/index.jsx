import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

import "./index.css";

export const SocialLinks = () => {
  return (
    <div className="socialLinks">
      <div className="socialLink">
        <a
          href="https://www.facebook.com/digitalbea"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook className="socialLinkIcon" />
        </a>
      </div>
      <div className="socialLink">
        <a
          href="https://github.com/khusdeepsen"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="socialLinkIcon" />
        </a>
      </div>
      <div className="socialLink">
        <a
          href="https://www.instagram.com/digibea_/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="socialLinkIcon" />
        </a>
      </div>
      <div className="socialLink">
        <a href="https://twitter.com/DIGIBEA2" target="_blank" rel="noreferrer">
          <FaTwitter className="socialLinkIcon" />
        </a>
      </div>
      <div className="socialLink">
        <a
          href="https://www.linkedin.com/company/digibea/about/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="socialLinkIcon" />
        </a>
      </div>
      <div className="socialLink">
        <a
          href="https://www.youtube.com/channel/UCU6K2-vNOE9zVLr4Q02HZJA"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube className="socialLinkIcon" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
