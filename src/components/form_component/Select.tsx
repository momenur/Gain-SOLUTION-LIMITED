import React from "react";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  options: Option[];
  placeholder?: string;
  onChange?: (value: string) => void;
};

const Select: React.FC<SelectProps> = ({
  options,
  placeholder = "Choose an Option",
  onChange,
}) => {
  return (
    <div className="w-full ">
      <select
        onChange={(e) => onChange && onChange(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        defaultValue=""
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
