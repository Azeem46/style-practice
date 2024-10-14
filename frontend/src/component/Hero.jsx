import { useState } from "react";
import About from "./About";
import ContactUs from "./ContactUs";
import OurSoftware from "./OurSoftware";
import Services from "./Services";
import Testimonal from "./Testimonal";
import Menu from "./Menu";
import img0 from "../assets/ip1.jpg";
// Import Link for navigation

const Hero = () => {
  const [activeButton, setActiveButton] = useState(null);

  const buttonClass = (button) => `
    px-6 py-3 font-bold transition-colors duration-200 text-sm
    ${
      activeButton === button
        ? "bg-gray-900 text-white"
        : "bg-white text-gray-900 border border-gray-900"
    }
    hover:bg-gray-900 hover:text-white
  `;

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between bg-white p-16 ">
        <div className="flex:grow mb-32 md:mb-0 md:mr-16">
          <h1 className="text-4xl font-bold text-[#679af5] mb-2">BUILD BEST</h1>
          <h2 className="text-6xl font-bold text-[#323232] mb-4">SOFTWARE</h2>
          <p className="text-[#171616] mb-8 max-w-md">
            There are many variations of passages of Lorem Ipsum available, but
            the majority
          </p>
          <div className="flex space-x-4">
            <button
              className={buttonClass("contact")}
              onClick={() => setActiveButton("contact")}
            >
              CONTACT US
            </button>
            <button
              className={buttonClass("quote")}
              onClick={() => setActiveButton("quote")}
            >
              GET A QUOTE
            </button>
          </div>
        </div>{" "}
        <div className="w-full md:w-auto md:max-w-md h-full md:h-[300px]"></div>
      </div>

      {/* Menu positioned at the bottom of the main content area */}
      <Menu />

      <About />

      <Services />
      <OurSoftware />
      <div className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 lg:px-20">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">FULLY RESPONSIVE</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">WELL DOCUMENTED</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">EASY TO USE</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo.
            </p>
          </div>
        </div>
      </div>
      <Testimonal />
      <ContactUs />
    </div>
  );
};

export default Hero;
