import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Header from '../Header/Header';
import img1 from '/imgs/1.jpg'
import img2 from '/imgs/2.jpg'
import img3 from '/imgs/3.jpg'
import img4 from '/imgs/4.jpg'
import img5 from '/imgs/5.jpg'

const Slider = () => {
  return (
    <div className='max-w-screen-xl mx-auto p-8'>
      <Header subtitle="Build and Show" title="Your Self"></Header>
      <Swiper
        className='rounded-xl'
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className='relative flex '>
          <img className='filter grayscale  rounded-xl w-full h-[100vh] object-cover' src={img1} alt="" />
          <h1 className='absolute top-[70%] left-8 text-5xl font-bold text-primary'>Train insane or remain the same</h1>
        </SwiperSlide>
        <SwiperSlide className='relative flex '>
          <img className='filter grayscale  rounded-xl w-full h-[100vh] object-cover' src={img2} alt="" />
          <h1 className='absolute top-[70%] left-8 text-5xl font-bold text-primary'>Train insane or remain the same</h1>
        </SwiperSlide>
        <SwiperSlide className='relative flex '>
          <img className='filter grayscale  rounded-xl w-full h-[100vh] object-cover' src={img3} alt="" />
          <h1 className='absolute top-[70%] left-8 text-5xl font-bold text-primary'>Train insane or remain the same</h1>
        </SwiperSlide>
        <SwiperSlide className='relative flex '>
          <img className='filter grayscale  rounded-xl w-full h-[100vh] object-cover' src={img4} alt="" />
          <h1 className='absolute top-[70%] left-8 text-5xl font-bold text-primary'>Train insane or remain the same</h1>
        </SwiperSlide>
        <SwiperSlide className='relative flex '>
          <img className='filter grayscale  rounded-xl w-full h-[100vh] object-cover' src={img5} alt="" />
          <h1 className='absolute top-[70%] left-8 text-5xl font-bold text-primary'>Train insane or remain the same</h1>
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  );
};

export default Slider;