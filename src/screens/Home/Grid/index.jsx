import React from "react";
import { CardGroup } from "react-bootstrap";

import ImageCard from "../../../components/ImageCard";
import ServicesData from "../../ServiceDetail/ServicesData";

import "./index.css";

// const servicesTitle = {
//   textAlign: "center",
//   position: "relative",
//   top: "80px",
//   backgroundColor: "#f4f4f4",
//   color: "#2f2e41",
//   padding: "1rem",
//   fontWeight: "bold",
// };

const Grid = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", fontWeight: "600" }}>
        Services Offered
      </h1>
      <div className="py-3 grid-container">
        <CardGroup>
          {ServicesData.map((i) => {
            return <ImageCard image={i.image} id={i.id} name={i.name} />;
          })}
        </CardGroup>
        {/* <div className="servicesText">
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt at
            soluta quod. Rem consequuntur non natus, eligendi quas
            exercitationem provident reprehenderit alias impedit repellat
            similique dolore sequi ratione commodi officia.
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Grid;
