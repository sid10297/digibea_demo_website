import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

import "./index.css";
import { Strings } from "../../constants/strings";
import SocialLinks from "../SocialLinks";
import { address, vision } from "../../assets/images";
import ContactInfo from "../ContactInfo";
import MapContainer from "../Contact/GetQuote/MapContainer";

const DBFooter = () => {
  return (
    <MDBFooter>
      <MDBContainer fluid className="footerContainer">
        <div className="footerContent">
          <div className="vision">
            <img className="footerImg" src={vision} alt={"vision"} />
            <div className="content">
              <h5 className="title">{Strings.footerCompanyMsgHeading}</h5>
              <p className="msg">{Strings.footerCompanyMessage}</p>
            </div>
          </div>
          <div className="address">
            <img className="footerImg" src={address} alt={"address"} />
            <div className="content">
              <h5 className="title">{Strings.footerAddressHeading}</h5>
              <ContactInfo />
            </div>
          </div>
        </div>
        <br />
        <MapContainer />

        <SocialLinks />
      </MDBContainer>
      <div className="footer-copyright py-3">
        <MDBContainer>
          <p>
            {Strings.footerCopyright} &copy; {new Date().getFullYear()}
          </p>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default DBFooter;
