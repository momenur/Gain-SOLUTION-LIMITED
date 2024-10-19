import { HiUserGroup } from "react-icons/hi";
import StaticButton from "./StaticButton";
import { TiUserAdd } from "react-icons/ti";
import { useState } from "react";
import ModalData from "../modal/ModalData";

const HomeHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="flex items-center justify-between pt-10">
      <div className="flex items-center gap-2">
        <HiUserGroup className="p-4 text-blue-700 bg-white rounded-lg text-7xl" />
        <div>
          <p className="text-lg font-semibold text-black">Employee Time</p>
          <p className="text-gray-700">Manage your time logs</p>
        </div>
      </div>
      <div className="flex">
        <StaticButton />
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 flex gap-2 items-center"
          onClick={handleOpenModal}
        >
          <TiUserAdd />
          Add Employee
        </button>

        {/* Modal is Start */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div className="relative w-full max-w-lg max-h-full p-4 bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="pt-6 ps-4">
                <p className="text-xl font-semibold">Employee Information</p>
                <button
                  type="button"
                  className="absolute top-8 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 md:p-5">
                <ModalData />

                <div className="flex justify-end gap-3">
                  {/* Modal Footer */}

                  <button
                    onClick={handleCloseModal}
                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    No, cancel
                  </button>
                  <button
                    onClick={handleCloseModal}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
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
