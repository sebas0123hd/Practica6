import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
    return (
        <Swiper
            className="swiper-container"
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}


        >

            <SwiperSlide>
                <img src="diapositiva1.jpg" alt="Slide 1" className="slide" style={{ width: "100%" }}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="diapositiva2.jpg" alt="Slide 1" className="slide" style={{ width: "100%" }}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="diapositiva3.jpg" alt="Slide 1" className="slide" style={{ width: "60%" }}/>
            </SwiperSlide>

        </Swiper>
    )
};
export default Carousel;