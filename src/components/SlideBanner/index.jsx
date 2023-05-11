import React from "react";
import styles from './Banner.module.scss'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

// import required modules
import { Autoplay, Navigation, } from "swiper";
import LinkBanner from "./LinkBanner";


const index = ({images}) => {
  return (
    <Swiper
      scrollbar={{ draggable: true }}
      navigation
      modules={[ Autoplay, Navigation,]}
    >
       { images && images.map(({id, imgURL}) => (
          <SwiperSlide>
            <LinkBanner key={id} imgURL={imgURL} />
          </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default index;