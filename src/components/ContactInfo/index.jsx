import React from "react";

import "./index.css";

const ContactInfo = () => {
  return (
    <div className="contactContainer">
      <div>
        <p className="label">Visit Us:</p>
        <p>401, Shreeram Chamber, RC Dutt Road</p>
        <p>Opposite Circuit House</p>
        <p>Alkapuri, Vadodara, 390005, Gujarat</p>
      </div>
      <br />
      <div>
        <p className="label">Contact Us:</p>
        <p>
          Phone:
          <span> </span>
          <span>
            <a href="tel:+91 7043189991">+91 7043189991</a>
          </span>
        </p>
        <p>
          Alt. Phone:
          <span>
            <a href="tel:+91 9016919205">+91 9016919205</a>
          </span>
        </p>
        <p>
          Email:
          <span> </span>
          <span>
            <a href="mailto:info@digibea.com">info@digibea.com</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
