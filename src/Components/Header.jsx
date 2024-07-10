// import logo from './logo.svg';
import React from "react";

const Headerr = () => {

  return(
    <div className="top-0 left-0 right-0 top-header-area bg-blue-950 text-white">
    <div className="container">
      <div className="lg:flex lg:justify-start lg:text-sm text-xs lg:p-3 p-2 text-center">
        
          <div className="flex lg:border-r-[1px] gap-1 lg:border-slate-400 lg:p-2 pb-2">
            <p className="font-bold">Telp: </p>
            <a href=""> 0882-2243-765</a>
          </div>

          <div className="flex lg:border-r-[1px] gap-1 lg:border-slate-400 lg:p-2 pb-2">
            <p className="font-bold">Email:</p>
            <a href=""> info@vidyamedic.pptik.id</a>
          </div>

          <div className="flex lg:border-r-[1px] gap-1 lg:border-slate-400 lg:p-2 pb-2">
            <p className="font-bold">Mon-Sat:</p>
            <a href=""> 8.00 AM - 7.00 PM</a>
          </div>
            
      </div>
    </div>
  </div>
  );
}

export default Headerr;