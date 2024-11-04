import { TfiImport } from "react-icons/tfi";

const StaticButton = () => {
  return (
    <button className="flex items-center justify-center max-h-10 gap-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-800 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
      Export Excel
      <TfiImport />
    </button>
  );
};

export default StaticButton;
