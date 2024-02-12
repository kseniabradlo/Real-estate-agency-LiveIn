import {Swiper, SwiperSlide} from 'swiper/react';
import './Swiperreview.css';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';
import Onereview from "../Onereview/Onereview";
import {useSelector} from "react-redux";

// https://swiperjs.com/react
function Swiperreview(){
let reviews=useSelector(state=>state.reviews.reviews);
    return(
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y,Keyboard, Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}

            spaceBetween={10}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            // autoplay={{delay:2000}}
            // centeredSlides={true}
            keyboard={{
                enabled:true,
                onlyInViewport:true,
                pageUpDown:true}}
            loop={true}
        >
            <div className="swiperimg">
                {
                    reviews.map(el=>                <SwiperSlide><div className="img"><Onereview {...el}/></div></SwiperSlide>
                    )
                }



            </div>
        </Swiper>
    )
}

export default Swiperreview;