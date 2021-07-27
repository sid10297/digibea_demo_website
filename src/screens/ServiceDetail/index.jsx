import React from "react";
// import { Link } from "react-router-dom";
import CarouselItem from "../../components/CarouselItem";
// import Grid from "../Home/Grid";

import "./index.css";
import ServicesData from "./ServicesData";

const ServiceDetail = ({ match }) => {
  const service = ServicesData.find(
    (service) => service.id === match.params.id
  );

  return (
    <>
      {service && (
        <CarouselItem
          src={service.image}
          title={service.name}
          description={service.content}
        />
      )}

      {/* <Grid allServices={service.grid} /> */}
    </>
  );
};

export default ServiceDetail;
