import React, { useState } from "react";
import Modal from "./Modal";

const Todolist = () => {
  const [note, setNote] = useState([
    { note: "wwwww", checked: false },
    { note: "ddddd", checked: true },
  ]);

  return (
    <div>
      <p className="text-5xl pb-4">To Do Lists</p>
      <table className="table-auto rounded-md bg-slate-800 outline-offset-2 border-slate-500 w-full">
        <thead>
          <tr>
            <th className="border border-slate-600 p-4">Title</th>
            <th className="border border-slate-600 p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {note.map((value, index) => (
            <tr key={index}>
              <td
                className={`border border-slate-600 p-4 cursor-pointer hover:bg-slate-700 ${
                  value.checked
                    ? "line-through decoration-green-600 decoration-double bg-gray-800"
                    : ""
                }`}
              >
                {value.note}
              </td>
              <td className="border border-slate-600 p-4">
                <div className="flex justify-around">
                  <button className="bg-red-400 text-white rounded-md p-1">
                    Delete
                  </button>
                  <button className="bg-blue-500 text-white rounded-md p-1">
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="bg-orange-500 text-white p-2 mt-4 rounded-md hover:bg-orange-400">
        Add
      </button>
      <Modal />
    </div>
  );
};

export default Todolist;
