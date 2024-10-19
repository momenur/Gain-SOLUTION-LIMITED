import { useState } from "react";
import { data } from "../../data/data";

const DataTable = () => {
  const [reject, setReject] = useState(false);
  const [approve, setApprove] = useState(true);

  const tableData = data;
  return (
    <div className="relative pt-6 overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
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
          {tableData?.map((item) => (
            <tr
              key={item?.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item?.id}
              </th>
              <td className="px-2 py-4 truncate">{item?.employee}</td>
              <td className="px-2 py-4 truncate">{item?.duration}</td>
              <td className="px-2 py-4 truncate">
                <div className="flex flex-col gap-1">
                  <p>{item?.start_time} </p>
                  {item.end_time && <p>{item?.end_time} </p>}
                </div>
              </td>
              <td className="px-2 py-4 truncate">{item?.due_hours}</td>
              <td className={`px-2 truncate `}>
                <div
                  className={`flex max-w-min items-center gap-2 py-1 px-2 rounded-2xl ${
                    item.department === "Design"
                      ? "text-green-500 bg-green-100"
                      : item.department === "Development"
                      ? "text-blue-500 bg-blue-100"
                      : item.department === "Product"
                      ? "text-amber-600 bg-amber-100"
                      : item.department === "Sales"
                      ? " bg-purple-300"
                      : ""
                  } `}
                >
                  <div
                    className={`w-1 h-1 text-3xl ${
                      item.department === "Design"
                        ? "text-green-500 bg-green-800"
                        : item.department === "Development"
                        ? "text-blue-500 bg-blue-800"
                        : item.department === "Product"
                        ? " bg-amber-800"
                        : item.department === "Sales"
                        ? " bg-purple-800"
                        : ""
                    } rounded-full`}
                  ></div>
                  <p>{item?.department}</p>
                </div>
              </td>
              <td className="px-2 py-4 truncate">{item?.project}</td>
              <td className="px-2 py-4 truncate">{item?.notes}</td>
              <td className="px-2 py-4 truncate">
                {approve ? (
                  <div className="flex gap-2">
                    <button
                      onClick={() => setReject(!reject)}
                      className="text-red-600"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => setApprove(!approve)}
                      className="px-4 py-1 text-white bg-green-400 rounded-lg"
                    >
                      Approve
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={() => setReject(!reject)}
                      className="text-red-600"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => setApprove(!approve)}
                      className="px-4 py-1 text-gray-500 border-gray-600 rounded-lg border-[1px]"
                    >
                      undo
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
