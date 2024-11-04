import { useState } from "react";
import { FaEllipsisV, FaPen, FaFileExport, FaTrash } from "react-icons/fa";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="z-50 inline-block text-left ">
      <button
        onClick={handleToggle}
        className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
      >
        <FaEllipsisV />
      </button>

      {isOpen && (
        <div
          className="absolute right-[45px] z-50 w-40 mt-2 bg-white border border-gray-200 divide-y divide-gray-100 rounded-lg shadow-lg"
          onMouseLeave={handleClose}
        >
          <div className="py-1">
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <FaPen className="mr-2" />
              Edit Info
            </button>
          </div>
          <div className="py-1">
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <FaFileExport className="mr-2" />
              Export Excel
            </button>
          </div>
          <div className="py-1">
            <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-100">
              <FaTrash className="mr-2" />
              Delete Info
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
