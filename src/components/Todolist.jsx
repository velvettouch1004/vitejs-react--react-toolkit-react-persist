import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { checkTodo, removeTodo } from "../redux/slice/todoSlice";
const Todolist = () => {
  const [note, setNote] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [modaldata, setModaldata] = useState(null);
  const todo = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();
  useEffect(() => {
    setNote(todo);
  }, [todo]);
  const editHandler = (data) => {
    setModaldata(data);
    setToggle(true);
  };
  const closeModal = () => {
    setToggle(false);
    setModaldata(null);
  };
  return (
    <div>
      <p className="text-5xl pb-4">To Do Lists</p>
      <table className="rounded-md bg-slate-800 outline-offset-2 border-slate-500 w-full">
        <thead>
          <tr>
            <th className="border border-slate-600 p-4">Title</th>
            <th className="border border-slate-600 p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {note.map((value) => (
            <tr key={value.id}>
              <td
                className={`border border-slate-600 p-4 cursor-pointer hover:bg-slate-700 ${
                  value.checked
                    ? "line-through decoration-green-600 decoration-double bg-gray-800 text-green-600"
                    : ""
                }`}
                onClick={() => dispatch(checkTodo(value.id))}
              >
                {value.note}
              </td>
              <td className="border border-slate-600 p-4">
                <div className="flex justify-around">
                  <button
                    className="bg-red-400 text-white rounded-md p-1"
                    onClick={() => dispatch(removeTodo(value.id))}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-blue-500 text-white rounded-md p-1"
                    onClick={() => editHandler(value)}
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
