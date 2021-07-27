import React from "react";

import { address, bulb, digital } from "../../assets/images";
import CarouselItem from "../../components/CarouselItem";
import Member from "../../components/Members";
import membersDetail from "../../components/Members/memberDetails";
import { AboutPageStrings } from "../../constants/aboutPageStrings";
import "./index.css";

const About = () => {
  return (
    <>
      <div className="aboutPage">
        <div className="aboutLandingPage">
          <CarouselItem
            src={address}
            title="About Us"
            description={AboutPageStrings.aboutContent}
          />
        </div>
        <div className="aboutDescriptionContainer">
          <div className="aboutHeading">
            <h3>{AboutPageStrings.aboutPageHeading}</h3>
          </div>
          <div className="aboutDescription">
            <p>{AboutPageStrings.aboutPageDescription}</p>
          </div>
          <div className="aboutImg">
            <img src={digital} alt="" />
          </div>
        </div>
        <div className="whyChooseUsContainer">
          <div className="whyChooseUs">
            <div className="whyChooseUsSubContainer">
              <h1>{AboutPageStrings.whyChooseUsHeading}</h1>
              <p>{AboutPageStrings.whyChooseUsDescription}</p>
            </div>
          </div>
          <div className="analyze">
            <h3>{AboutPageStrings.analyzeHeading}</h3>
            <p>{AboutPageStrings.analyzeDescription}</p>
          </div>
          <div className="bulb">
            <img className="bulbImage" src={bulb} alt="" />
          </div>
          <div className="ideate">
            <h3>{AboutPageStrings.ideateHeading}</h3>
            <p>{AboutPageStrings.ideateDescription}</p>
          </div>
          <div className="stratagize">
            <h3>{AboutPageStrings.strategizeHeading}</h3>
            <p>{AboutPageStrings.strategizeDescription}</p>
          </div>
          <div className="deliver">
            <h3>{AboutPageStrings.deliverHeading}</h3>
            <p>{AboutPageStrings.deliverDescription}</p>
          </div>
        </div>
        <h1 style={{ textAlign: "center", fontWeight: "600" }}>
          Our Creative Minds
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {membersDetail.map((memberDetail) => {
            return (
              <Member
                photo={memberDetail.photo}
                name={memberDetail.name}
                designation={memberDetail.designation}
                link={memberDetail.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
