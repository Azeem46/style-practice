import icon from "../assets/react.svg";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className=" max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* Logo */}
            <img className="h-10 w-auto" src={icon} alt="React Jobs" />
            <span className="hidden md:block text-gray-800 text-2xl font-bold ml-2">
              CodexJob Infotech
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
