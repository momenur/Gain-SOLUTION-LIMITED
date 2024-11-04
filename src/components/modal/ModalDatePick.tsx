import { RiArrowDropDownLine } from "react-icons/ri";
import DatePicker from "../form_component/DatePicker";

const ModalDatePicker = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-4 lg:flex-row">
      <div className="flex flex-col w-full gap-2">
        <p>Date Range</p>
        <button className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full max-w-sm min-w-[150px] px-4 py-2.5">
          <div className="flex items-center justify-between w-full ">
            <div className="flex items-center w-full gap-4">
              <span>Last 7 Days</span>
            </div>
            <RiArrowDropDownLine className="text-xl" />
          </div>
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <p>Start Date</p>
        <DatePicker />
      </div>
      <div className="flex flex-col gap-2">
        <p>End Date</p>
        <DatePicker />
      </div>
    </div>
  );
};

export default ModalDatePicker;
