import { department_options, project_options } from "../../constant/options";
import Select from "../form_component/Select";
import { IoMdAdd } from "react-icons/io";

const ModalAddEmployee = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 mb-4">
        <p>Employee ID</p>
        <div>
          <input
            type="text"
            defaultValue="#1250"
            className="block w-[170px] p-2 text-xs text-gray-800 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  "
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <p>Type Employee Name</p>
        <div>
          <input
            type="text"
            defaultValue="Sadik Hasan"
            className="block w-[270px] p-2 text-xs text-gray-800 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="flex gap-10 mb-4">
        <div className="flex flex-col gap-2 mb-4">
          <p>Select Department</p>
          <div>
            <Select options={department_options} placeholder="Department" />
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <p>Select Project</p>
          <div>
            <Select options={project_options} />
          </div>
        </div>
      </div>
      <div className="flex gap-10 mb-4">
        <div className="flex flex-col gap-2 mb-4">
          <p>End Time</p>
          <div className="flex w-full gap-3">
            <button className="flex items-center min-w-[85px] justify-between w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
              {" "}
              10: 30
            </button>
            <button className="flex items-center justify-between w-full px-2 py-2 text-sm font-bold text-blue-800 border-2 border-blue-700 rounded-lg bg-gray-50 ">
              <IoMdAdd />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <p>End Time</p>
          <div className="flex w-full gap-3">
            <button className="flex items-center min-w-[85px] justify-between w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
              10: 30
            </button>
            <button className="flex items-center justify-between w-full px-2 py-2 text-sm font-bold text-blue-800 border-2 border-blue-700 rounded-lg bg-gray-50 ">
              <IoMdAdd />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddEmployee;
