import React from "react";
import Header from "./header.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Footer from "../Components/Footer";
import Form from "../Components/Form";
import Solution from "../Components/Solution";
import D1 from "../Main/D1.jpg"
import Navbar from "../Components/Navbar";
import Headerr from "../Components/Header";


function LandingPage() {
  return (
    <>
    
      <section className="">
        <Headerr/>
        <Navbar/>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full lg:h-full h-[35rem] "
      >
        <SwiperSlide className="w-full ">
        <div className="w-full flex flex-wrap pl-4 mt-12 pr-4 pb-4 justify-between">

<div>
  {/* garis */}
  <div className="w-[1px] bg-slate-500 h-64 ml-4 mb-3 "></div>

  {/* icon */}
  <div className="flex flex-col">
    <div className="bg-blue-700 w-8 h-8 rounded-full mb-1 "></div>
    <div className="bg-blue-400 w-8 h-8 rounded-full mb-1"></div>
    <div className="bg-blue-600 w-8 h-8 rounded-full "></div>
  </div>

  {/* garis  */}
  <div className="w-[1px] bg-slate-500 h-64 ml-4 mt-3"></div>
</div>

<div className=" lg:w-[80rem] w-[20rem] h-[40rem] mt-28 lg:mt-0 lg:h-[43rem] flex-col flex justify-start" style={{ backgroundImage: "/url(./header.jpg)" }}>
  <h1 className="lg:text-left text-center lg:text-7xl text-xl font-bold lg:mt-14 ">We want to heal Patient with the services</h1>
  <p className="mt-3 lg:text-left text-center">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus.</p>
  <div className="flex gap-2 lg:justify-start justify-center mt-3">
    <button className="lg:px-8 lg:py-3 py-2 px-4 bg-blue-700 rounded-lg text-white hover:bg-black transition-all font-medium ">Klinik</button>
    <button className="lg:px-8 lg:py-3 py-2 px-4 bg-indigo-700 rounded-lg text-white hover:bg-black transition-all font-medium ">Hubungi Kami</button>
  </div>
</div>

<div>
  {/* garis */}
  <div className="w-[1px] bg-slate-500 h-64 ml-4 mb-3 "></div>

  {/* icon */}
  <div className="flex flex-col">
    <div className="bg-blue-700 w-8 h-8 rounded-full mb-1 "></div>
    <div className="bg-blue-400 w-8 h-8 rounded-full mb-1"></div>
    <div className="bg-blue-600 w-8 h-8 rounded-full "></div>
  </div>

  {/* garis  */}
  <div className="w-[1px] bg-slate-500 h-64 ml-4 mt-3"></div>
</div>
</div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
        <div className="w-full flex flex-wrap pl-4 mt-12 pr-4 pb-4 justify-between">

<div>
  {/* garis */}
  <div className="w-[1px] bg-slate-500 h-64 ml-4 mb-3 "></div>

  {/* icon */}
  <div className="flex flex-col">
    <div className="bg-blue-700 w-8 h-8 rounded-full mb-1 "></div>
    <div className="bg-blue-400 w-8 h-8 rounded-full mb-1"></div>
    <div className="bg-blue-600 w-8 h-8 rounded-full "></div>
  </div>

  {/* garis  */}
  <div className="w-[1px] bg-slate-500 h-64 ml-4 mt-3"></div>
</div>

<div className=" lg:w-[60rem] w-[20rem] h-[40rem] mt-28 lg:mt-0 lg:h-[30rem] flex-col flex justify-start" style={{ backgroundImage: "url(./Component/header.jpg)" }}>
  <h1 className="lg:text-left text-center lg:text-7xl text-xl font-bold lg:mt-14 ">Need your expertise we are ready</h1>
  <p className="mt-3 lg:text-left text-center">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus.</p>
  <div className="flex gap-2 lg:justify-start justify-center mt-3">
    <button className="lg:px-8 lg:py-3 py-2 px-4 bg-blue-700 rounded-lg text-white hover:bg-black transition-all font-medium ">Klinik</button>
    <button className="lg:px-8 lg:py-3 py-2 px-4 bg-indigo-700 rounded-lg text-white hover:bg-black transition-all font-medium ">Hubungi Kami</button>
  </div>
</div>

<div>
  {/* garis */}
  <div className="w-[1px] bg-slate-500 h-64 ml-4 mb-3 "></div>

  {/* icon */}
  <div className="flex flex-col">
    <div className="bg-blue-700 w-8 h-8 rounded-full mb-1 "></div>
    <div className="bg-blue-400 w-8 h-8 rounded-full mb-1"></div>
    <div className="bg-blue-600 w-8 h-8 rounded-full "></div>
  </div>

  {/* garis  */}
  <div className="w-[1px] bg-slate-500 h-64 ml-4 mt-3"></div>
</div>
</div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
        <div className="w-full flex flex-wrap pl-4 mt-12 pr-4 pb-4 justify-between">

<div>
  {/* garis */}
  <div className="w-[1px] bg-slate-500 h-64 ml-4 mb-3 "></div>

  {/* icon */}
  <div className="flex flex-col">
    <div className="bg-blue-700 w-8 h-8 rounded-full mb-1 "></div>
    <div className="bg-blue-400 w-8 h-8 rounded-full mb-1"></div>
    <div className="bg-blue-600 w-8 h-8 rounded-full "></div>
  </div>

  {/* garis  */}
  <div className="w-[1px] bg-slate-500 h-64 ml-4 mt-3"></div>
</div>

<div className=" lg:w-[60rem] w-[20rem] h-[40rem] mt-28 lg:mt-0 lg:h-[30rem] flex-col flex justify-start" style={{ backgroundImage: "url(./Component/header.jpg)" }}>
  <h1 className="lg:text-left text-center lg:text-7xl text-xl font-bold lg:mt-14 ">Our strength is your well being</h1>  
  <p className="mt-3 lg:text-left text-center">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus.</p>
  <div className="flex gap-2 lg:justify-start justify-center mt-3">
    <button className="lg:px-8 lg:py-3 py-2 px-4 bg-blue-700 rounded-lg text-white hover:bg-black transition-all font-medium ">Klinik</button>
    <button className="lg:px-8 lg:py-3 py-2 px-4 bg-indigo-700 rounded-lg text-white hover:bg-black transition-all font-medium ">Hubungi Kami</button>
  </div>
</div>

<div>
  {/* garis */}
  <div className="w-[1px] bg-slate-500 h-64 ml-4 mb-3 "></div>

  {/* icon */}
  <div className="flex flex-col">
    <div className="bg-blue-700 w-8 h-8 rounded-full mb-1 "></div>
    <div className="bg-blue-400 w-8 h-8 rounded-full mb-1"></div>
    <div className="bg-blue-600 w-8 h-8 rounded-full "></div>
  </div>

  {/* garis  */}
  <div className="w-[1px] bg-slate-500 h-64 ml-4 mt-3"></div>
</div>
</div>
        </SwiperSlide>
      </Swiper>
      </section>

      <section className="flex flex-wrap justify-center gap-4">
        {/* Item 1 */}
        <div className="relative w-44 h-40 bg-slate-200 group shadow-lg border rounded-md    ">
          <div className="absolute  bottom-4 left-3 group-hover:invisible">
            <h1 className="text-3xl font-serif">Klinik </h1>
          </div>
          <div className="absolute inset-0 bg-blue-600 text-white invisible transition-all delay-75 duration-100 group-hover:visible">
            <div className="absolute bottom-4 left-3">
              <h1 className="text-3xl font-serif">Klinik </h1>
            </div>
          </div>
        </div>
        {/* Akhir Item 1 */}

        {/* Item 2 */}
        <div className="relative w-44 h-40 bg-slate-200 group shadow-lg border rounded-md       ">
          <div className="absolute  bottom-4 left-3 group-hover:invisible">
            <h1 className="text-3xl font-serif">Rumah Sakit </h1>
          </div>
          <div className="absolute inset-0 bg-blue-600 text-white invisible transition-all delay-75 duration-100 group-hover:visible">
            <div className="absolute bottom-4 left-3">
              <h1 className="text-3xl font-serif">Rumah Sakit </h1>
            </div>
          </div>
        </div>
        {/* Akhir Item 2 */}

        {/* Item 3 */}
        <div className="relative w-44 h-40 bg-slate-200 group shadow-lg border rounded-md">
          <div className="absolute  bottom-4 left-3 group-hover:invisible">
            <h1 className="text-3xl font-serif">Posyandu</h1>
          </div>
          <div className="absolute inset-0 bg-blue-600 text-white invisible transition-all delay-75 duration-100 group-hover:visible">
            <div className="absolute bottom-4 left-3">
              <h1 className="text-3xl font-serif">Posyandu</h1>
            </div>
          </div>
        </div>
        {/* Akhir Item 3 */}

        {/* Item 4 */}
        <div className="relative w-44 h-40 bg-slate-200 group shadow-lg border rounded-md">
          <div className="absolute  bottom-4 left-3 group-hover:invisible">
            <h1 className="text-3xl font-serif">Apotek</h1>
          </div>
          <div className="absolute inset-0 bg-blue-600 text-white invisible transition-all delay-75 duration-100 group-hover:visible">
            <div className="absolute bottom-4 left-3">
              <h1 className="text-3xl font-serif">Apotek</h1>
            </div>
          </div>
        </div>
        {/* Akhir Item 4 */}

        {/* Item 5 */}
        <div className="relative w-44 h-40 bg-slate-200 group shadow-lg border rounded-md">
          <div className="absolute  bottom-4 left-3 group-hover:invisible">
            <h1 className="text-3xl font-serif">Posbindu</h1>
          </div>
          <div className="absolute inset-0 bg-blue-600 text-white invisible transition-all delay-75 duration-100 group-hover:visible">
            <div className="absolute bottom-4 left-3">
              <h1 className="text-3xl font-serif">Posbindu</h1>
            </div>
          </div>
        </div>
        {/* Akhir Item 5 */}
      </section>

      <section className="w-full flex flex-wrap mt-8 bg-slate-100">

        <div className="flex flex-col flex-wrap  ml-[5rem] mt-16">

          <div className="flex gap-4 flex-wrap lg:justify-start justify-center ">
            <img className="h-[25rem]  w-[384px] bg-cover bg-center" src={Header} />
            <div className="flex flex-col ml-2">
              <h1 className="text-2xl lg:text-left text-center max-w-[12rem] font-serif mb-3 ">
                Connect With<span className="text-sky-400"> VidyaMedic </span>
                 Health Care
              </h1>
              <img className="h-[18.2rem]  w-60 bg-cover bg-center" src={Header} />
            </div>
          </div>
          <div className="mt-6">
          <img className="h-[18.2rem]  w-[650px] bg-cover bg-center" src={Header} />
          </div>

          
        </div>
        <div className="flex flex-col lg:ml-28 mt-7 ">
          <h1 className="text-blue-500 text-base lg:ml-0 ml-3 lg:text-xl tracking-widest font-medium ">WHO WE ARE </h1>
          <div className="max-w-xl">
          <h1 className="lg:text-4xl ml-4 lg:ml-0 text-2xl font-semibold lg:mt-4 ">We have been providing services to patients for over 20 years</h1>
            <p className=" mt-3 text-base ml-4 lg:ml-0 lg:text-lg">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat.</p>
          </div>
            <div className="flex justify-center lg:justify-start flex-wrap gap-2 mt-3 ">
              <div className="flex flex-col lg:w-60 lg:h-60 lg:border-none border-solid border-[1px] border-gray-300  w-full h-56 justify-start py-7 max-[600px]:px-7">
              <i className="fa-solid fa-shield-halved text-5xl pt-1 lg:pl-1  pl-4 "></i>
              <h1 className="text-2xl font-medium lg:pl-1  pl-4 ">1K+ Healing Hands</h1>
              <p className="font-base text-base lg:pl-1  pl-4  mt-5">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus.</p>
              </div>
              <div className="flex flex-col lg:w-60 lg:h-60 lg:border-none border-solid border-[1px] border-gray-300  w-full h-56 justify-start py-7 max-[600px]:px-7">
              <i className="fa-solid fa-shield-halved text-5xl pt-1 lg:pl-1  pl-4 "></i>
              <h1 className="text-2xl font-medium lg:pl-1  pl-4 ">1K+ Healing Hands</h1>
              <p className="font-base text-base lg:pl-1  pl-4  mt-5">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus.</p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start flex-wrap gap-2 mt-3">
              <div className="flex flex-col lg:w-60 lg:h-60 lg:border-none border-solid border-[1px] border-gray-300  w-full h-56 justify-start py-7 max-[600px]:px-7">
              <i className="fa-solid fa-shield-halved text-5xl pt-1 lg:pl-1  pl-4 "></i>
              <h1 className="text-2xl font-medium lg:pl-1  pl-4 ">1K+ Healing Hands</h1>
              <p className="font-base text-base lg:pl-1  pl-4  mt-5">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus.</p>
              </div>
              <div className="flex flex-col lg:w-60 lg:h-60 lg:border-none border-solid border-[1px] border-gray-300  w-full h-56 justify-start py-7 max-[600px]:px-7">
              <i className="fa-solid fa-shield-halved text-5xl pt-1 lg:pl-1  pl-4 "></i>
              <h1 className="text-2xl font-medium lg:pl-1  pl-4 ">1K+ Healing Hands</h1>
              <p className="font-base text-base lg:pl-1  pl-4  mt-5">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus.</p>
              </div>
            </div>
           
          </div>

      </section>


      <section className="mt-8 w-full min-h-screen">

        <h1 className="text-center md:text-lg sm:text-base text-xl tracking-wider uppercase text-blue-400">OUR DEPARTMENT</h1>
        <div className="flex w-full justify-center">
        <p className="text-center max-w-[40rem] sm:text-xl md:text-2xl  lg:text-4xl ">Our clinic has all kinds of departments, so you can get all kinds of treatment</p>
        </div>

        <div className="w-full flex flex-wrap justify-center gap-4">

          <div className="relative bg-black h-[9rem] transition-all w-[17rem] hover:-translate-y-5 group lg:mb-0 mb-[20rem] ">
            <div className="absolute  ">
            <img className="h-full bg-cover bg-center" src={D1} />
              <div className="absolute bottom-10 left-4 text-white">
                <h1 className="text-2xl font-semibold mb-2">Orthopedics</h1>
                <p className="text-base"> Pellentesque in ipsum id orci porta dapibus. Lorem, ipsum. </p>
              </div>

                <div className="absolute inset-0  bg-blue-700 overflow-hidden invisible group-hover:visible transition-all duration-75">
                  <div className="absolute flex justify-center items-center -translate-x-12 -translate-y-9 top-0 left-0 bg-blue-400 w-48 h-48 rounded-full ">
                  <i class="fa-solid fa-hands-praying text-5xl text-white" ></i>
                  </div>
                    <div className="absolute bottom-12 left-6">
                      <h1 className="text-3xl mb-1 text-white font-medium">Orthopedics </h1>
                      <p className="text-lg text-white">Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh.</p>
                    </div>

                </div>

            </div>
          </div>
          <div className="relative bg-black h-[9rem] transition-all w-[17rem] hover:-translate-y-5 group lg:mb-0 mb-[20rem] ">
            <div className="absolute  ">
            <img className="h-full bg-cover bg-center" src={D1} />
              <div className="absolute bottom-10 left-4 text-white">
                <h1 className="text-2xl font-semibold mb-2">Orthopedics</h1>
                <p className="text-base"> Pellentesque in ipsum id orci porta dapibus. Lorem, ipsum. </p>
              </div>

                <div className="absolute inset-0  bg-blue-700 overflow-hidden invisible group-hover:visible transition-all duration-75">
                  <div className="absolute flex justify-center items-center -translate-x-12 -translate-y-9 top-0 left-0 bg-blue-400 w-48 h-48 rounded-full ">
                  <i class="fa-solid fa-hands-praying text-5xl text-white" ></i>
                  </div>
                    <div className="absolute bottom-12 left-6">
                      <h1 className="text-3xl mb-1 text-white font-medium">Orthopedics </h1>
                      <p className="text-lg text-white">Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh.</p>
                    </div>

                </div>

            </div>
          </div>
          <div className="relative bg-black h-[9rem] transition-all w-[17rem] hover:-translate-y-5 group lg:mb-0 mb-[20rem] ">
            <div className="absolute ">
            <img className="h-full bg-cover bg-center" src={D1} />
              <div className="absolute bottom-10 left-4 text-white">
                <h1 className="text-2xl font-semibold mb-2">Orthopedics</h1>
                <p className="text-base"> Pellentesque in ipsum id orci porta dapibus. Lorem, ipsum. </p>
                <a className="text-white text-lg pt-1" href="#">Read More....</a>

              </div>

                <div className="absolute inset-0  bg-blue-700 overflow-hidden invisible group-hover:visible transition-all duration-75">
                  <div className="absolute flex justify-center text-white items-center -translate-x-12 -translate-y-9 top-0 left-0 bg-blue-400 w-48 h-48 rounded-full ">
                  <i class="fa-solid fa-hands-praying text-5xl " ></i>
                  </div>
                    <div className="absolute bottom-12 left-6">
                      <h1 className="text-3xl mb-1 text-white font-medium">Orthopedics </h1>
                      <p className="text-lg text-white">Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh.</p>
                      <a className="text-white text-lg pt-1" href="#">Read More....</a>
                    </div>

                </div>

            </div>
          </div>
          <div className="relative bg-black h-[9rem] transition-all w-[17rem] hover:-translate-y-5 group lg:mb-0 mb-[20rem] ">
            <div className="absolute ">
            <img className="h-full bg-cover bg-center" src={D1} />
              <div className="absolute bottom-10 left-4 text-white">
                <h1 className="text-2xl font-semibold mb-2">Orthopedics</h1>
                <p className="text-base"> Pellentesque in ipsum id orci porta dapibus. Lorem, ipsum. </p>
              </div>

                <div className="absolute inset-0  bg-blue-700 overflow-hidden invisible group-hover:visible transition-all duration-75">
                  <div className="absolute flex justify-center items-center -translate-x-12 -translate-y-9 top-0 left-0 bg-blue-400 w-48 h-48 rounded-full ">
                  <i class="fa-solid fa-hands-praying text-5xl text-white" ></i>
                  </div>
                    <div className="absolute bottom-12 left-6">
                      <h1 className="text-3xl mb-1 text-white font-medium">Orthopedics </h1>
                      <p className="text-lg text-white">Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh.</p>
                      
                    </div>

                </div>

            </div>
          </div>

          
        </div>
      
      </section>

      <section className="flex w-full flex-wrap mt-5 lg:justify-start sm:justify-center md:justify-center">
        <div className="flex flex-col xl:ml-[5rem]">
          <p className="text-blue-500 tracking-widest text-lg font-medium"> WHY CHOOSE US</p>
          <h1 className="text-4xl font-base tracking-wide max-w-[600px]">Our clinic has professional doctors who provide low cost 24 hour service</h1>
          <p className="max-w-[600px] text-base mt-3  ">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat.</p>
          {/* Items 1 */}
          <div className="flex flex-col">
            <div className="lg:flex gap-5 mt-4  ">
              <div className="flex lg:w-20 text-4xl w-16 h-16 font-semibold text-white lg:h-20 justify-center items-center rounded-full bg-blue-600 ">1</div>
              <div className="flex flex-col">
              <h1 className="lg:text-2xl text-xl mt-2 ">Modern Technology</h1>
              <p className="max-w-md mt-2 text-sm">Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
              </div>
            </div>
            {/* Akhir Items 1 */}

            {/* Garis */}
            <div className="w-[2.5px] bg-blue-950 h-[3.9rem] ml-[39px] -mb-[2rem] -mt-[9.5px] hidden lg:block"></div>
            {/* Akhir Garis */}

            {/* Items 2 */}
            <div className="lg:flex gap-5 mt-7  ">
              <div className="flex lg:w-20 text-4xl  w-16 h-16  font-semibold text-white lg:h-20 justify-center items-center rounded-full bg-indigo-950 ">2</div>
              <div className="flex flex-col">
              <h1 className="lg:text-2xl text-xl mt-2">Modern Technology</h1>
              <p className="max-w-md mt-2 text-sm">Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
              </div>
            </div>
            {/* Akhir Items 2 */}

            {/* Garis */}
            <div className="w-[2.5px] bg-blue-950 h-[3.9rem] ml-[39px] -mb-[2rem] -mt-[9.5px] hidden lg:block"></div>
            {/* Akhir Garis */}

            {/* Items 3 */}
            <div className="lg:flex gap-5 mt-7  ">
              <div className="flex lg:w-20 text-4xl  w-16 h-16  font-semibold text-white lg:h-20 justify-center items-center rounded-full bg-blue-600 ">3</div>
              <div className="flex flex-col">
              <h1 className="lg:text-2xl text-xl mt-2 ">Modern Technology</h1>
              <p className="max-w-md mt-2 text-sm mb-2 lg:mb-0 ">Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
              </div>
            </div>
            {/* Akhir Items 3 */}
          </div>
        </div>
        <div className="lg:w-[45rem] md:w-[30rem] sm:w-[30rem] lg:h-[25rem] md:h-[20rem] sm:h-[15rem] lg:border-none border-[1px] border-gray-400 lg:ml-20 lg:mt-28 relative">
            <img className="h-full xl:ml-[3rem] xl:pl-[2rem] lg:ml-[3rem] bg-cover bg-center" src={Header} />
             <div className="absolute lg:w-[24rem] h-28 lg:bottom-10 w-full lg:right-0 bottom-0  bg-white">
                 <div className="flex flex-col mt-4 ml-24">
                    <h1 className="text-xl font-medium ">24/7 Hours Service</h1>
                     <h1 className="text-4xl font-semibold mt-1 text-blue-500">1-885-665-2022</h1>
          </div>
        </div>  
        </div>
      </section>
      <section className="w-full pt-12">
      <h1 className="text-center text-base mb-3 tracking-widest text-blue-600 lg:text-lg font-medium">Our Specialist</h1>
      <div className="w-full justify-center flex">
      <h1 className="  text-center text-3xl lg:text-4xl max-w-2xl ">We have all the professional specialists in our clinic </h1>
      </div>
      <div className="flex flex-wrap w-full mt-8 justify-center gap-4 ">
      <div className="w-72 h-[28rem] flex-col hover:-translate-y-4 transition-all">
      <img className="h-[22rem]  w-full bg-cover bg-center" src={Header} />
      <h1 className="ml-2 mt-4 text-3xl hover:text-blue-600 transition-all">Glenn Arredondo</h1>
      <p className="ml-2 mt-1 text-lg ">Family Physicians</p>
      </div>

      <div className="w-72 h-[28rem] flex-col hover:-translate-y-4 transition-all">
      <img className="h-[22rem]  w-full bg-cover bg-center" src={Header} />
      <h1 className="ml-2 mt-4 text-3xl hover:text-blue-600 transition-all">Glenn Arredondo</h1>
      <p className="ml-2 mt-1 text-lg ">Family Physicians</p>
      </div>
      <div className="w-72 h-[28rem] flex-col hover:-translate-y-4 transition-all">
      <img className="h-[22rem]  w-full bg-cover bg-center" src={Header} />
      <h1 className="ml-2 mt-4 text-3xl hover:text-blue-600 transition-all">Glenn Arredondo</h1>
      <p className="ml-2 mt-1 text-lg ">Family Physicians</p>
      </div>
      <div className="w-72 h-[28rem] flex-col hover:-translate-y-4 transition-all">
      <img className="h-[22rem]  w-full bg-cover bg-center" src={Header} />
      <h1 className="ml-2 mt-4 text-3xl hover:text-blue-600 transition-all">Glenn Arredondo</h1>
      <p className="ml-2 mt-1 text-lg ">Family Physicians</p>
      </div>
      </div>
      </section>
        <Form></Form>
        <Solution/>
        
      
    </>
  );
}

export default LandingPage;