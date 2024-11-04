import { useState } from "react";
import DropdownMenu from "./DropDown";
import { data } from "../../../data/data";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

type TUndo = {
  id: string;
  type?: string;
};

const TableRow = () => {
  const [tableData, setTableData] = useState(data);
  const toggleApproval = (id: string) => {
    setTableData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? {
              ...item,
              rejected: !item.approved,
              approved: false, // Reset rejected to false if approved
            }
          : item
      )
    );
  };

  const toggleReject = (id: string) => {
    setTableData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? {
              ...item,
              rejected: !item.rejected,
              approved: false, // Reset rejected to false if approved
            }
          : item
      )
    );
  };

  const toggleUndo = ({ id, type }: TUndo) => {
    console.log({ id, type });
    setTableData((prevData) =>
      prevData.map((item) => {
        if (item?.id === id) {
          if (type === "approved") {
            return {
              ...item,
              rejected: false,
              approved: !item.approved, // Reset approved to false if rejected
            };
          }
          if (type === "rejected") {
            return {
              ...item,
              rejected: !item.rejected,
              approved: true, // Reset approved to false if rejected
            };
          }
          console.log("Toggled Item:", item); // Log the item being toggled
        }
        return item; // Return the item unchanged
      })
    );
  };

  return (
    <>
      {" "}
      {tableData.map((item) => (
        <tr key={item.id} className="bg-white border-b min:w-full">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap"
          >
            {item.id}
          </th>
          <td className="px-2 py-4 font-medium truncate">{item.employee}</td>
          <td className="px-2 py-4 font-medium truncate">{item.duration}</td>
          <td className="px-2 py-4 font-medium truncate">
            <div className="flex flex-col gap-1">
              <p>{item.start_time}</p>
              {item.end_time && <p>{item.end_time}</p>}
            </div>
          </td>
          <td className="px-2 py-4 font-medium truncate">{item.due_hours}</td>
          <td className={`px-2 font-medium truncate`}>
            <div
              className={`flex max-w-min items-center gap-2 py-1 px-2 rounded-2xl ${
                item.department === "Design"
                  ? "text-green-500 bg-green-100"
                  : item.department === "Development"
                  ? "text-blue-500 bg-blue-100"
                  : item.department === "Product"
                  ? "text-amber-600 bg-amber-100"
                  : item.department === "Sales"
                  ? "bg-purple-300"
                  : ""
              }`}
            >
              <div
                className={`w-1 h-1 text-3xl ${
                  item.department === "Design"
                    ? "text-green-500 bg-green-800"
                    : item.department === "Development"
                    ? "text-blue-500 bg-blue-800"
                    : item.department === "Product"
                    ? "bg-amber-800"
                    : item.department === "Sales"
                    ? "bg-purple-800"
                    : ""
                } rounded-full`}
              ></div>
              <p>{item.department}</p>
            </div>
          </td>
          <td className="px-2 py-4 font-medium truncate">{item.project}</td>
          <td className="px-2 py-4 font-medium truncate ">{item.notes}</td>
          <td className="flex py-4 truncate ">
            <div className="flex items-center justify-between w-[200px]">
              <div className="flex-1 pe-2">
                <div className="flex gap-2">
                  {item.approved ? (
                    <>
                      <button
                        onClick={() => toggleReject(item.id)}
                        className="font-semibold text-[#E02600] flex-1"
                      >
                        Reject
                      </button>

                      <button
                        onClick={() => toggleApproval(item.id)}
                        className="px-4 py-1 text-white bg-[#089624] rounded-lg"
                      >
                        Approve
                      </button>
                    </>
                  ) : item.rejected ? (
                    <>
                      <button
                        // onClick={() => toggleReject(item.id)}
                        className="font-semibold bg-[#FEF7F4] rounded-lg px-2 py-1  text-[#E02600] border-[1px] border-[#E02600] flex items-center gap-2"
                      >
                        <FaTimesCircle />
                        <span> Rejected</span>
                      </button>

                      <button
                        onClick={() =>
                          toggleUndo({ id: item.id, type: "rejected" })
                        }
                        className="px-2 py-1 font-semibold text-[#737080] border-[1px] rounded-lg"
                      >
                        Undo
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="font-semibold bg-green-100 rounded-lg px-2 py-1 text-[#089624] border-[1px] border-[#089624] flex items-center gap-2">
                        <FaCheckCircle />
                        <span>Approved</span>
                      </button>
                      <button
                        onClick={() =>
                          toggleUndo({ id: item.id, type: "approved" })
                        }
                        className="px-2 py-1  font-semibold text-[#737080] border-[1px] rounded-lg"
                      >
                        Undo
                      </button>
                    </>
                  )}
                </div>
              </div>
              <DropdownMenu />
            </div>
          </td>
        </tr>
      ))}{" "}
    </>
  );
};

export default TableRow;
