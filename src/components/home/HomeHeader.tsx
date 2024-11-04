import { HiUserGroup } from "react-icons/hi";
import StaticButton from "./StaticButton";
import { TiUserAdd } from "react-icons/ti";
import { useState } from "react";
import ModalAddEmployee from "../modal/ModalAddEmployee";

const HomeHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center gap-6 pt-10 md:flex-row md:justify-between">
      <div className="flex items-center w-full gap-4 md:w-auto">
        <HiUserGroup className="p-4 text-6xl text-[#2E3FDA] bg-white rounded-lg sm:text-7xl" />
        <div className="text-center md:text-start">
          <p className="text-lg font-semibold text-black">Employee Time</p>
          <p className="text-sm text-gray-700 sm:text-base">
            Manage your time logs
          </p>
        </div>
      </div>

      <div className="flex flex-col items-stretch w-full gap-4 md:flex-row md:items-center md:w-auto">
        <StaticButton />
        <button
          className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium text-white bg-[#2E3FDA] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 md:w-auto"
          onClick={handleOpenModal}
        >
          <TiUserAdd />
          <span>Add Employee</span>
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-11/12 max-w-md p-2 bg-white rounded-lg shadow-lg md:p-6 md:w-full md:max-w-lg">
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3">
                <p className="text-xl font-semibold">Employee Information</p>
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-800 "
                  onClick={handleCloseModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 md:p-5">
                <ModalAddEmployee />

                <div className="flex justify-end gap-3 pt-4">
                  {/* Modal Footer */}
                  <button
                    onClick={handleCloseModal}
                    className="py-2.5 px-4 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-100  "
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCloseModal}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5"
                  >
                    Add Employee
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeHeader;
