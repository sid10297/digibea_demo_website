import React from "react";

import "./index.css";

const CarouselItem = ({ src, title, description }) => (
  <div className={"carouselItemContainer"}>
    <img className={"carouselItemImg"} src={src} alt={title} />
    <div className={"carouselItemInfo"}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

export default CarouselItem;
