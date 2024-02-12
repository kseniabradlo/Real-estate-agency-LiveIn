import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/css/bundle';

import picone from '../../assets/images/IMG_8674.jpg';
import pictwo from '../../assets/images/IMG_6835.jpg';
import picthree from '../../assets/images/ludwinowskagrey.png';
import picfour from '../../assets/images/IMG_6851.jpg';
import housestairs from '../../assets/images/IMG_6896.jpg';
import picsix from '../../assets/images/IMG_6851.jpg';
import picseven from '../../assets/images/DSC_2133.jpg';

import './Swiper.css'

// https://swiperjs.com/react
function Swipercomp(){

    return(
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y,Keyboard, Autoplay]}
            slidesPerView={3}
            loopedSlides={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}

            spaceBetween={20}
            // watchOverflow={true}
            // effect={"fade"}
            // fadeEffect={true}
            // slidesPerGroup={3}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            // autoplay={{delay:2000}}
            centeredSlides={true}
            keyboard={{
            enabled:true,
            onlyInViewport:true,
            pageUpDown:true}}
            loop={true}
>
            <div className="swiperimg">
            {/*<SwiperSlide><div className="swiperimg"><img src={picone}/></div></SwiperSlide>*/}
            {/*<SwiperSlide><div className="swiperimg"><img src={pictwo}/></div></SwiperSlide>*/}
            <div><SwiperSlide><img className="swiper-img" src={picone}/></SwiperSlide></div>
          <div><SwiperSlide><img className="swiper-img" src={pictwo}/></SwiperSlide></div>
          <div><SwiperSlide><img className="swiper-img" src={picthree}/></SwiperSlide></div>
           <div><SwiperSlide><img className="swiper-img" src={picfour}/></SwiperSlide></div>
           <div><SwiperSlide><img className="swiper-img" src={housestairs}/></SwiperSlide></div>
           {/*<div><SwiperSlide><img className="swiper-img" src={picsix}/></SwiperSlide></div>*/}
           {/*<div><SwiperSlide><img className="swiper-img" src={picseven}/></SwiperSlide></div>*/}
           {/*  <div><SwiperSlide><img className="swiper-img" src={picthree}/></SwiperSlide></div>*/}
           {/* <div><SwiperSlide><img className="swiper-img" src={picfour}/></SwiperSlide></div>*/}
            </div>
        </Swiper>
    )
}

export default Swipercomp;