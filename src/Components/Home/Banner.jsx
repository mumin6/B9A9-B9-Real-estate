import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/93SNkY8/house-8571836-1280.jpg"
            className="w-full rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/Kb5LFHx/pexels-vividcafe-681333.jpg"
            className="w-full rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/1GpKxkb/beach-fornt-Seaclusion-exterior.jpg"
            className="w-full rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/Kb5LFHx/pexels-vividcafe-681333.jpg"
            className="w-full rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/jVm2JvN/resorts-palm-3172367-1280.jpg"
            className="w-full rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
