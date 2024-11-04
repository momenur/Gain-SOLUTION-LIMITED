import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

type Option = {
  label?: string;
  value?: string;
  colorClass?: string;
  icon?: JSX.Element;
};

const options: Option[] = [
  {
    label: "Approved",
    value: "approved",
    colorClass: "text-green-600",
    icon: <FaCheckCircle className="text-green-600" />,
  },
  {
    label: "Rejected",
    value: "rejected",
    colorClass: "text-red-600",
    icon: <FaTimesCircle className="text-red-600" />,
  },
];

const TableSelect: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full px-4 py-2.5    "
      >
        {selectedOption ? (
          <span
            className={`flex items-center gap-2 ${selectedOption.colorClass}`}
          >
            {selectedOption.label}
          </span>
        ) : (
          <span className="text-gray-800">Status</span>
        )}
        <RiArrowDropDownLine className="text-xl text-gray-800" />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 ${option?.colorClass}`}
            >
              {option?.icon}
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TableSelect;
