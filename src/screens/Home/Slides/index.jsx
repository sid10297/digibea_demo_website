import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./index.css";

import { General } from "../../../constants/general";
import CarouselData from "../../Home/Slides/data";
import CarouselItem from "../../../components/CarouselItem";

const Slides = () => (
  <Carousel
    indicators={false}
    controls={false}
    // style={{ height: "89vh" }}
    interval={General.caraouselInterval}
  >
    {CarouselData.map((item) => {
      return (
        <Carousel.Item>
          <CarouselItem
            key={item.id}
            src={item.src}
            title={item.title}
            description={item.description}
          />
        </Carousel.Item>
      );
    })}
  </Carousel>
);

export const imgStyling = {
  height: "90vh",
};

export default Slides;
