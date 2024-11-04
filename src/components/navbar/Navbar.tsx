import SearchFiled from "../form_component/SearchFiled";
import userImage from "../../assets/user.jpg";
import logoImage from "../../assets/Logo.png";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="flex flex-wrap items-center justify-between px-4 py-4 mx-auto max-w-screen-2xl md:px-8">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-semibold">plut</h1>
          <img className="w-8 h-8" src={logoImage} alt="Logo" />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button className="text-2xl" onClick={toggleNavbar}>
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col items-center gap-4 mt-4 md:flex md:flex-row md:mt-0 md:gap-8 w-full md:w-auto transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col items-center gap-4 md:flex-row">
            <li className="cursor-pointer hover:text-blue-600">Home</li>
            <li className="font-semibold text-blue-700 cursor-pointer hover:text-blue-600">
              Employee
            </li>
            <li className="cursor-pointer hover:text-blue-600">Hiring</li>
            <li className="cursor-pointer hover:text-blue-600">Report</li>
            <li className="cursor-pointer hover:text-blue-600">Files</li>
            <li className="cursor-pointer hover:text-blue-600">Payroll</li>
          </ul>

          {/* Search Field */}
          <div className="hidden w-full px-4 md:block md:w-auto md:px-0">
            <SearchFiled placeholder="Search Anything..." />
          </div>

          {/* User Profile */}
          <div className="flex-col items-center hidden gap-2 md:flex md:flex-row md:gap-4">
            <div className="hidden text-center md:text-right md:block">
              <p className="font-semibold text-md">Sadik Hasan</p>
              <p className="text-gray-600">Friday, 29 September</p>
            </div>
            <img
              className="w-10 h-10 rounded-full"
              src={userImage}
              alt="User"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
