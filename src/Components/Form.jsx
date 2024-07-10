// src/App.js
import React from 'react';
import Header from './header.jpg';

const Form = () => {
  return (
    <div className="flex justify-center items-center min-h-screen lg:px-0 px-10">
      <div className="bg-white shadow-md rounded-md overflow-hidden w-full lg:flex">
        <div className="lg:w-1/2 relative">
          <img
            src={Header}
            alt="Nurse on Phone"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-24 left-10 w-[80%] lg:w-[400px] text-3xl bg-white bg-opacity-90 p-4 rounded-md">
            <p className="text-black px-10 py-10">Help us get the treatment you need</p>
          </div>
        </div>
        <div className="lg:w-1/2 p-10 lg:p-20 bg-blue-800 text-white">
          <form>
            <div className='mb-4 text-3xl'>
              <h1>Make An Appointment</h1>
            </div>
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block mb-1">NAME</label>
                <input
                  type="text"
                  className="w-full p-2 border border-slate-100 rounded-md text-slate-100 bg-blue-800"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">CHOOSE DOCTOR NAME</label>
                <select className="w-full p-2 rounded-md border border-slate-100 bg-blue-800 text-black">
                  <option>Barbara Ybarra</option>
                </select>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block mb-1">EMAIL</label>
                <input
                  type="email"
                  className="w-full p-2 rounded-md border border-slate-100 bg-blue-800 text-black"
                  value="bexi@gmail.com"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">SELECT DEPARTMENT</label>
                <select className="w-full p-2 rounded-md border border-slate-100 bg-blue-800 text-black">
                  <option>Cardiologists</option>
                </select>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block mb-1">PHONE</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-md border border-slate-100 bg-blue-800 text-black"
                  value="***********"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">DATE</label>
                <input
                  type="date"
                  className="w-full p-2 bg-blue-800 border border-slate-100 rounded-md text-black"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1">APPOINTMENT NOTE</label>
              <textarea
                className="w-full h-40 p-2 bg-blue-800 border border-slate-100 rounded-md text-black"
                placeholder="write your note here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white p-3 rounded-md hover:bg-blue-600"
            >
              Make an appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
