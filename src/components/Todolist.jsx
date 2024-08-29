import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { checkTodo, removeTodo } from "../redux/action";
const Todolist = () => {
  const [note, setNote] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [modaldata, setModaldata] = useState(null);
  const todo = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    setNote(todo);
  }, [todo]);
  const editHandler = (data, index) => {
    setModaldata({ data, index });
    setToggle(true);
  };
  const closeModal = () => {
    setToggle(false);
    setModaldata(null);
  };
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
                onClick={() => dispatch(checkTodo(index))}
              >
                {value.note}
              </td>
              <td className="border border-slate-600 p-4">
                <div className="flex justify-around">
                  <button
                    className="bg-red-400 text-white rounded-md p-1"
                    onClick={() => dispatch(removeTodo(index))}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-blue-500 text-white rounded-md p-1"
                    onClick={() => editHandler(value.note, index)}
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="bg-orange-500 text-white p-2 mt-4 rounded-md hover:bg-orange-400"
        onClick={() => setToggle(true)}
      >
        Add
      </button>
      {toggle ? <Modal data={modaldata} close={closeModal} /> : <></>}
    </div>
  );
};

export default Todolist;
