import { FaEdit, FaTimes } from "react-icons/fa"; // Importing icons from React Icons
import ButtonIconText from "./ButtonIconText";

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ResponsiveTable = () => {
  const { state, dispatch } = useContext(AppContext);
  const records = state.records || [];

  const openAddModal = (index) => {
    dispatch({ type: "EDIT_SINGLE_RECORD", payload: index });
  };

  const deleteRecord = (index) => {
    if (
      confirm(
        `Are you sure you want to delete record for ${state.records[index].name}?`
      )
    ) {
      dispatch({ type: "DELETE_SINGLE_RECORD", payload: index });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2 hidden xl:table-cell">
                Position
              </th>
              <th className="border border-gray-300 px-4 py-2 hidden xl:table-cell">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 hidden xl:table-cell">
                Local No
              </th>
              <th className="border border-gray-300 px-4 py-2 hidden xl:table-cell">
                Phone
              </th>
              <th className="border border-gray-300 px-4 py-2 hidden xl:table-cell">
                Website
              </th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {record.name}
                </td>
                <td className="border border-gray-300 px-4 py-2 hidden xl:table-cell">
                  {record.position}
                </td>
                <td className="border border-gray-300 px-4 py-2 hidden xl:table-cell">
                  {record.email}
                </td>
                <td className="border border-gray-300 px-4 py-2 hidden xl:table-cell">
                  {record.local}
                </td>
                <td className="border border-gray-300 px-4 py-2 hidden xl:table-cell">
                  {record.phone}
                </td>
                <td className="border border-gray-300 px-4 py-2 hidden xl:table-cell">
                  {record.website}
                </td>

                <td className="px-4 py-2 flex space-x-2 justify-center">
                  <ButtonIconText
                    label=""
                    icon={FaEdit}
                    onClick={() => openAddModal(index)}
                  />
                  <ButtonIconText
                    label=""
                    icon={FaTimes}
                    bgColor="bg-red"
                    onClick={() => deleteRecord(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResponsiveTable;
