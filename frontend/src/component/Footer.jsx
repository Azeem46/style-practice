import React from "react";
import icon10 from "../assets/fb-icon.png";
import icon11 from "../assets/twitter-icon.png";
import icon12 from "../assets/linkedin-icon.png";
import icon13 from "../assets/instagram-icon.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-8">
        {/* Left Section */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <span className="bg-blue-500 text-white font-bold text-3xl p-2 rounded-full">
              CodexJob Infotech
            </span>
            <h3 className="text-xl font-bold ml-3">SOFTWARE</h3>
          </div>
          <p className="text-gray-400">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or...
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

      <div className="container mx-auto mt-10 border-t border-gray-700 pt-6">
        {/* Copyright */}
        <p className="flex text-gray-400 text-sm justify-center ">
          Copyright 2024 All Right Reserved By CodexInfotech
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 justify-end">
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
  );
};

export default Footer;
