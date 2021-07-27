import { Strings } from "../../../constants";
import {
  emailCampaign,
  marketing,
  onlineAd,
} from "../../../assets/images/index";

const CarouselData = [
  {
    id: marketing,
    src: marketing,
    title: Strings.carouselSlideOneHeading,
    description: Strings.carouselSlideOneContent,
  },
  {
    id: emailCampaign,
    src: emailCampaign,
    title: Strings.carouselSlideTwoHeading,
    description: Strings.carouselSlideTwoContent,
  },
  {
    id: onlineAd,
    src: onlineAd,
    title: Strings.carouselSlideThreeHeading,
    description: Strings.carouselSlideThreeContent,
  },
];

export default CarouselData;
