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
    <nav className="flex flex-wrap items-center justify-between px-4 py-5 bg-[#FFFFFF] shadow-lg md:px-8 lg:px-24">
      <div className="flex items-center gap-2">
        <h1 className="text-3xl font-semibold">plut</h1>
        <img className="w-[30px]" src={logoImage} alt="Logo" />
      </div>
      <div className="md:hidden">
        <button className="text-2xl" onClick={toggleNavbar}>
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } w-full flex-col items-center gap-4 mt-5 md:flex md:w-auto md:flex-row md:mt-0 md:gap-8 transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-center gap-4 md:flex-row">
          <li>Home</li>
          <li className="font-semibold text-blue-700">Employee</li>
          <li>Hiring</li>
          <li>Report</li>
          <li>Files</li>
          <li>Payroll</li>
        </ul>
        <SearchFiled searchWidth="200px" hidden="hidden" />
        <div className="flex-col items-center hidden gap-2 md:flex md:flex-row">
          <div className="block text-center md:hidden lg:block md:text-end">
            <p className="font-semibold text-md">Sadik Hasan</p>
            <p className="text-gray-600">Friday, 29 September</p>
          </div>
          <img className="w-12 h-12 rounded-md" src={userImage} alt="User" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
