import { useState } from "react";
import { Search, Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("HOME");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // for toggling menu on small/medium devices

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "CONTACT US", path: "/contact-us" },
    { name: "TESTIMONIAL", path: "/testimonal" },
    { name: "LOGIN" },
    { name: "REGISTER" },
  ];

  const menuItemClass = (item) => `
    px-4 py-2 text-sm font-medium transition-colors duration-200
    ${
      activeMenuItem === item.name
        ? "bg-sky-200 text-gray-900"
        : "text-white hover:bg-gray-700"
    }
  `;

  return (
    <div className="w-full bg-gray-900 text-white mx-auto">
      <div className="container mx-auto flex items-center justify-between py-1">
        {/* Toggle button for small/medium devices */}
        <div className="flex items-center justify-between w-full lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white px-4"
          >
            {isMenuOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
          <Search className="w-5 h-5 text-white" />
        </div>

        {/* Full menu for large devices */}
        <div className="hidden lg:flex items-center space-x-4 w-full justify-center">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path || "#"}
              className="no-underline"
            >
              <button
                className={menuItemClass(item)}
                onClick={() => setActiveMenuItem(item.name)}
              >
                {item.name}
              </button>
            </Link>
          ))}
        </div>

        {/* Search icon for large devices */}
        <div className="hidden lg:block px-4">
          <Search className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Toggleable menu for small/medium devices */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center w-full">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path || "#"}
              className="no-underline w-full"
            >
              <button
                className={`w-full text-left ${menuItemClass(item)}`}
                onClick={() => {
                  setActiveMenuItem(item.name);
                  setIsMenuOpen(false); // Close menu on item click
                }}
              >
                {item.name}
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
