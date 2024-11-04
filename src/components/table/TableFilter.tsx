import { useState } from "react";
import SearchFiled from "../form_component/SearchFiled";
import Select from "../form_component/Select";
import { BsCalendar2Date } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import ModalDatePicker from "../modal/ModalDatePick";
import TableSelect from "./components/TableSelect";
import { department_options } from "../../constant/options";

const TableFilter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="flex justify-end">
      <div className="grid w-full grid-cols-1 gap-2 justify-items-end md:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-3">
          <SearchFiled />
        </div>

        <button
          onClick={handleOpenModal}
          className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2.5"
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <span>
                <BsCalendar2Date />
              </span>
              <span>Date Range</span>
            </div>
            <RiArrowDropDownLine className="text-xl" />
          </div>
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-11/12 md:min-w-[700px] p-2 md:p-6 bg-white rounded-lg shadow-lg md:w-full md:max-w-lg">
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3">
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-800"
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
                <ModalDatePicker />

                <div className="flex justify-end gap-3 pt-6">
                  {/* Modal Footer */}
                  <button
                    onClick={handleCloseModal}
                    className="px-4 py-0 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCloseModal}
                    className="px-4 py-2 text-xs font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-blue-300"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="lg:col-span-1">
          <TableSelect />
        </div>

        <div className="lg:col-span-1">
          <Select options={department_options} placeholder="Department" />
        </div>
      </div>
    </div>
  );
};

export default TableFilter;
