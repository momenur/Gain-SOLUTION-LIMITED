import Select from "../form_component/Select";

const ModalData = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 mb-4">
        <p>Employee ID</p>
        <div>
          <input
            type="text"
            defaultValue="#1250"
            className="block w-[170px] p-2 text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <p>Type Employee Name</p>
        <div>
          <input
            type="text"
            defaultValue="Sadik Hasan"
            className="block w-[270px] p-2 text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>

      <div className="flex gap-10 mb-4">
        <div className="flex flex-col gap-2 mb-4">
          <p>Type Employee Name</p>
          <div>
            <Select />
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <p>Type Employee Name</p>
          <div>
            <Select />
          </div>
        </div>
      </div>
      <div className="flex gap-10 mb-4">
        <div className="flex flex-col gap-2 mb-4">
          <p>Type Employee Name</p>
          <div>
            <Select />
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <p>Type Employee Name</p>
          <div>
            <Select />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalData;
