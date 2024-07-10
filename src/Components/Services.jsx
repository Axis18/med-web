import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

function Services() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  const cards = [
    { icon: "fa-truck-medical", title: "Minor Injurity" },
    { icon: "fa-truck-medical", title: "Minor Injurity" },
    { icon: "fa-truck-medical", title: "Minor Injurity" },
    { icon: "fa-truck-medical", title: "Minor Injurity" },
    { icon: "fa-truck-medical", title: "Minor Injurity" },
    { icon: "fa-truck-medical", title: "Minor Injurity" },
  ];

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
        className="mySwiper h-[25rem] w-full flex items-center justify-center"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="w-80 h-80 ml-20 lg:ml-0 bg-slate-200 flex justify-center items-center mx-2">
              <div className="flex flex-col justify-center items-center">
                <div className="w-40 h-40 rounded-full flex justify-center items-center bg-white">
                  <i className={`fa-solid ${card.icon} text-6xl`}></i>
                </div>
                <p className="text-center text-2xl font-medium font-serif mt-6">{card.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Services;
