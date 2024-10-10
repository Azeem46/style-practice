import React, { useState } from "react";
import { Search } from "lucide-react";
import icon from "../assets/img-1.png";
import icon2 from "../assets/img-2.png";
import icon3 from "../assets/img-3.png";
import icon4 from "../assets/img-4.png";
import icon5 from "../assets/img-5.png";
import icon6 from "../assets/img-6.png";
import icon7 from "../assets/img-7.png";
import icon8 from "../assets/img-8.png";
import icon9 from "../assets/img-10.png";
import icon10 from "../assets/fb-icon.png";
import icon11 from "../assets/twitter-icon.png";
import icon12 from "../assets/linkedin-icon.png";
import icon13 from "../assets/instagram-icon.png";
const Hero = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [activeMenuItem, setActiveMenuItem] = useState("HOME");

  const menuItems = [
    "HOME",
    "ABOUT",
    "OUR SOFTWARE",
    "SERVICES",
    "CONTACT US",
    "LOGIN",
    "REGISTER",
  ];

  const buttonClass = (button) => `
    px-6 py-3 font-bold transition-colors duration-200 text-sm
    ${
      activeButton === button
        ? "bg-gray-900 text-white"
        : "bg-white text-gray-900 border border-gray-900"
    }
    hover:bg-gray-900 hover:text-white
  `;

  const menuItemClass = (item) => `
    px-4 py-2 text-sm font-medium transition-colors duration-200
    ${
      activeMenuItem === item
        ? "bg-sky-200 text-gray-900"
        : "text-white hover:bg-gray-700"
    }
  `;

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="flex-grow bg-white p-16">
        <div className="mb-32">
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
        </div>
      </div>

      {/* Menu positioned at the bottom of the main content area */}
      <div className="w-full bg-gray-900 text-white mx-auto">
        <div className="container mx-auto flex items-center justify-between py-1">
          <div className="flex items-center space-x-4 w-full justify-center">
            {menuItems.map((item) => (
              <button
                key={item}
                className={menuItemClass(item)}
                onClick={() => setActiveMenuItem(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="px-4">
            <Search className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
      <div className="flex-grow bg-white p-16">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                About Softwares
              </h2>
              <p className="text-gray-600 mb-6">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden
              </p>
              <button className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700 transition duration-300">
                READ MORE
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src={icon}
                alt="Software technologies"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">What We Do</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-5 lg:px-20">
          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6">
            <img
              src={icon2}
              alt="New Technology Image"
              className="w-32 h-32 mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">New Technology</h3>
            <p className="text-gray-600 mb-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour.
            </p>
            <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded">
              Read More
            </a>
          </div>

          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6">
            <img
              src={icon3}
              alt="Long Live UX Image"
              className="w-32 h-32 mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Long Live UX</h3>
            <p className="text-gray-600 mb-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour.
            </p>
            <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded">
              Read More
            </a>
          </div>

          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6">
            <img
              src={icon4}
              alt="Web Trends Image"
              className="w-32 h-32 mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">Web Trends</h3>
            <p className="text-gray-600 mb-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour.
            </p>
            <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded">
              Read More
            </a>
          </div>

          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6">
            <img
              src={icon5}
              alt="User Interfaces Image"
              className="w-32 h-32 mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">User Interfaces</h3>
            <p className="text-gray-600 mb-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour.
            </p>
            <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="py-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-4">Our Software</h2>
        <p className="text-center text-gray-600 mb-8">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5 lg:px-20">
          <div className="relative">
            <img
              src={icon8}
              alt="Software Image 1"
              className="w-full h-auto object-cover rounded-lg"
            />
            <p className="absolute bottom-2 left-2 text-white text-sm">
              Ipsum available,
            </p>
          </div>

          <div className="relative">
            <img
              src={icon6}
              alt="Software Image 2"
              className="w-full h-auto object-cover rounded-lg"
            />
            <p className="absolute bottom-2 left-2 text-white text-sm">
              Ipsum available,
            </p>
          </div>

          <div className="relative">
            <img
              src={icon7}
              alt="Software Image 3"
              className="w-full h-auto object-cover rounded-lg"
            />
            <p className="absolute bottom-2 left-2 text-white text-sm">
              Ipsum available,
            </p>
          </div>
        </div>
      </div>
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
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg max-w-4xl w-full h-full">
          {/* Image section */}
          <div className="md:w-1/2 h-64 md:h-full">
            <img
              src={icon9} // Add your image URL here
              alt="Placeholder"
              className="w-full h-[600px] rounded-l-lg"
            />
          </div>

          {/* Form Section */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center h-full">
            <h2 className="text-2xl font-bold text-center mb-6">
              Get In Touch
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-8">
          {/* Left Section */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <span className="bg-blue-500 text-white font-bold text-3xl p-2 rounded-full">
                Q
              </span>
              <h3 className="text-xl font-bold ml-3">SOFTWARE</h3>
            </div>
            <p className="text-gray-400">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or...
            </p>
          </div>

          {/* Middle Section */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h3 className="font-bold text-lg mb-4">ADDRESS</h3>
            <p className="text-gray-400">
              Passages of Lorem Ipsum available, but the majority have...
              <br />
              (+71) 9876543210
              <br />
              demo@gmail.com
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/3">
            <h3 className="font-bold text-lg mb-4">NEWSLETTER</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-l-full p-2 text-gray-700 focus:outline-none w-full"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-r-full px-4 py-2 focus:outline-none hover:bg-blue-600 transition duration-200"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="container mx-auto mt-10 border-t border-gray-700 pt-6 flex justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            Copyright 2019 All Right Reserved By Free HTML Templates Distributed
            By ThemeWagon
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-white">
              <img src={icon10} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="text-white">
              <img src={icon11} alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" className="text-white">
              <img src={icon12} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="#" className="text-white">
              <img src={icon13} alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
