import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10">
      <div className="container mx-auto flex flex-wrap justify-between py-10">
        <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
          <div className="flex items-center mb-4">
            <img src="logo.png" alt="Logo" className="w-10 h-10" />
            <h2 className="text-2xl font-bold text-blue-600 ml-3">VIDYAMEDIC</h2>
          </div>
          <p className="mb-4">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie.</p>
          <p className="font-bold mb-4">177 Devon Lane Miami, MK 3355</p>
          <p className="mb-2">EMAIL US: <a href="mailto:info@vidyamedic.pptik.id" className="text-blue-600">info@vidyamedic.pptik.id</a></p>
          <p>CALL US: <a href="tel:1-885-665-2022" className="text-blue-600">1-885-665-2022</a></p>
        </div>
        <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
          <h3 className="text-xl font-bold mb-4">Departments</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-700">Emergency Departments</a></li>
            <li className="mb-2"><a href="#" className="text-gray-700">Orthopedics</a></li>
            <li className="mb-2"><a href="#" className="text-gray-700">Neurosciences</a></li>
            <li className="mb-2"><a href="#" className="text-gray-700">Gastroenterology</a></li>
            <li className="mb-2"><a href="#" className="text-gray-700">Bariatric Surgery</a></li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
          <h3 className="text-xl font-bold mb-4">Helpful Links</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-700">Find a Doctor</a></li>
            <li className="mb-2"><a href="#" className="text-gray-700">Find a Clinic</a></li>
            <li className="mb-2"><a href="#" className="text-gray-700">Buy Medicine</a></li>
            <li className="mb-2"><a href="#" className="text-gray-700">Terms of Use</a></li>
            <li className="mb-2"><a href="#" className="text-gray-700">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
          <h3 className="text-xl font-bold mb-4">Subscribe Our Newsletter</h3>
          <form>
            <input type="email" placeholder="Email address" className="w-full px-4 py-2 mb-4 border border-gray-300 rounded" />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Submit now</button>
          </form>
          <div className="flex mt-4">
            <a href="#" className="text-blue-600 mr-4"><i class="fa-brands fa-facebook fa-2xl"></i></a>
            <a href="#" className="text-blue-400 mr-4"><i className="fab fa-twitter fa-2xl"></i></a>
            <a href="#" className="text-blue-700 mr-4"><i className="fab fa-linkedin-in fa-2xl"></i></a>
            <a href="#" className="text-pink-500"><i className="fab fa-instagram fa-2xl"></i></a>
          </div>
        </div>
      </div>
      <div className="text-center py-4 bg-gray-200">
        <p>© VidyaMedic is Proudly Owned by <a href="#" className="text-blue-600">EnvyTheme</a></p>
      </div>
    </footer>
  );
};

export default Footer;
