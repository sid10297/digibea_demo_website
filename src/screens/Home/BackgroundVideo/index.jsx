import { Button } from "react-bootstrap";

import { coding } from "../../../assets/videos";

import "./index.css";
import { Link } from "react-router-dom";
import { HomePageStrings } from "../../../constants/homePageStrings";

const BackgroundVideo = () => {
  return (
    <div className="videoContainer">
      <video autoPlay loop muted src={coding} type="video/mp4" />

      <p>{HomePageStrings.homePageVideoHeading}</p>
      <br />
      <div className="btn-div">
        <Link to="/getQuote">
          <Button className="btn-lg video-btn" variant="warning">
            Any Queries?
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BackgroundVideo;
