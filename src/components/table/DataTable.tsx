import TableRow from "./components/TableRow";

const DataTable = () => {
  return (
    <div className="relative pt-6 overflow-x-auto">
      <table className="relative w-full text-sm text-left text-gray-500 rtl:text-right ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
          <tr>
            <th scope="col" className="px-2 py-3 truncate">
              ID
            </th>
            <th scope="col" className="px-2 py-3 truncate">
              Employee Name
            </th>
            <th scope="col" className="px-2 py-3 truncate">
              Duration
            </th>
            <th scope="col" className="px-2 py-3 truncate">
              Start Time - End Time
            </th>
            <th scope="col" className="px-2 py-3 truncate">
              Due Hours
            </th>
            <th scope="col" className="px-2 py-3 truncate">
              Department
            </th>
            <th scope="col" className="px-2 py-3 truncate">
              Project
            </th>
            <th scope="col" className="px-2 py-3 truncate">
              Notes
            </th>
            <th scope="col" className="px-2 py-3 truncate">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
