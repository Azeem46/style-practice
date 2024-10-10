import icon from "../assets/img-1.png";
// import { useState } from "react";
// import { Search } from "lucide-react";
// import { Link } from "react-router-dom";
const About = () => {
  //   const [activeMenuItem, setActiveMenuItem] = useState("HOME");

  //   const menuItems = [
  //     { name: "HOME", path: "/" },
  //     { name: "ABOUT", path: "/about" },
  //     { name: "OUR SOFTWARE", path: "/our-software" },
  //     { name: "SERVICES", path: "/services" },
  //     { name: "CONTACT US", path: "/contact-us" },
  //     { name: "LOGIN" },
  //     { name: "REGISTER" },
  //   ];

  //   const menuItemClass = (item) => `
  //     px-4 py-2 text-sm font-medium transition-colors duration-200
  //     ${
  //       activeMenuItem === item.name
  //         ? "bg-sky-200 text-gray-900"
  //         : "text-white hover:bg-gray-700"
  //     }
  //   `;
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
    </>
  );
};

export default About;
