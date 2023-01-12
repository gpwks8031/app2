import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

import "./mainSlideStyle.css";

import { Autoplay, Pagination } from "swiper";

function MainSlide() {
  const path = process.env.PUBLIC_URL;

  return (
    <div className="container1">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper mainSwiper"
      >
        <SwiperSlide className="slide">
          <img src={path + "/images/slide1.jpg"} alt="woman" />
          <h2>트렌드를 선도하는 기업</h2>
          <h3>Stay hungry, Stay foolish!</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={path + "/images/slide2.jpg"} alt="salad" />
          <h2 className="slidetxt2">최고로 가는 최선의 길</h2>
          <h3>Products for your business</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={path + "/images/slide3.jpg"} alt="girl" />
          <h2>BEST OF YOUR PARTNER</h2>
          <h3 className="slidetxt3">성공적인 비즈니스를 실현해 드립니다.</h3>
        </SwiperSlide>
      </Swiper>

      <div className="container2">
        <p>NOTICE</p>
        <p>
          <Link to="/">반응형 홈페이지입니다.</Link>
        </p>
        <p>2018-05-21</p>
        <Link to="/" class="more">
          버튼
        </Link>
      </div>
    </div>
  );
}

export default MainSlide;
