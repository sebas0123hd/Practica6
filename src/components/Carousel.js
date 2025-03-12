import {Swiper} from "swiper";
import {SwiperSlide} from "swiper/vue";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

const Carousel = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}>

            <SwiperSlide>

            </SwiperSlide>

            </Swiper>
    )
};
export default Carousel;