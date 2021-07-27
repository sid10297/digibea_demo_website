import React from "react";

import "../../components/CarouselItem/index.css";
import { blogging } from "../../assets/images";
import CarouselItem from "../../components/CarouselItem/index";

const Blogs = () => {
  return (
    <div>
      <CarouselItem src={blogging} title="Blogs" description={"Coming Soon!"} />
    </div>
  );
};

export default Blogs;
