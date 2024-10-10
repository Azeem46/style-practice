import icon6 from "../assets/img-6.png";
import icon7 from "../assets/img-7.png";
import icon8 from "../assets/img-8.png";
// import { useState } from "react";
// import { Search } from "lucide-react";
// import { Link } from "react-router-dom";

const OurSoftware = () => {
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
    </>
  );
};

export default OurSoftware;
