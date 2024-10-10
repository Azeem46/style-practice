import icon2 from "../assets/img-2.png";
import icon3 from "../assets/img-3.png";
import icon4 from "../assets/img-4.png";
import icon5 from "../assets/img-5.png";
// import { useState } from "react";
// import { Search } from "lucide-react";
// import { Link } from "react-router-dom";

const Services = () => {
  // const [activeMenuItem, setActiveMenuItem] = useState("HOME");

  // const menuItems = [
  //   { name: "HOME", path: "/" },
  //   { name: "ABOUT", path: "/about" },
  //   { name: "OUR SOFTWARE", path: "/our-software" },
  //   { name: "SERVICES", path: "/services" },
  //   { name: "CONTACT US", path: "/contact-us" },
  //   { name: "LOGIN" },
  //   { name: "REGISTER" },
  // ];

  // const menuItemClass = (item) => `
  //   px-4 py-2 text-sm font-medium transition-colors duration-200
  //   ${
  //     activeMenuItem === item.name
  //       ? "bg-sky-200 text-gray-900"
  //       : "text-white hover:bg-gray-700"
  //   }
  // `;
  return (
    <>
      {/* <div className="w-full bg-gray-900 text-white mx-auto">
        <div className="container mx-auto flex items-center justify-between py-1">
          <div className="flex items-center space-x-4 w-full justify-center">
            {menuItems.map((item) => (
              <Link key={item.name} to={item.path} className="no-underline">
                <button
                  className={menuItemClass(item)}
                  onClick={() => setActiveMenuItem(item.name)}
                >
                  {item.name}
                </button>
              </Link>
            ))}
          </div>
          <div className="px-4">
            <Search className="w-5 h-5 text-white" />
          </div>
        </div>
      </div> */}
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
    </>
  );
};

export default Services;
