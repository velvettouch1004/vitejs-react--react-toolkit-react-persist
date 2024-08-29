import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../redux/action";
const Modal = (props) => {
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  const { data, close } = props;

  useEffect(() => {
    if (data) {
      setNote(data.data.note);
    }
  }, [data]);
  const handleClick = () => {
    const newdata = {
      note: note,
      checked: data ? data.data.checked : false,
    };
    if (data) {
      dispatch(editTodo(newdata, data.index));
    } else {
      dispatch(addTodo(newdata));
    }
    close();
  };
  return (
    <div>
      <p className="text-3xl p-3">Type your Note</p>
      <input
        className="bg-slate-300 p-2 text-black rounded-l-lg"
        placeholder="note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button
        className="bg-green-500 text-white p-2 mt-4 rounded-r-lg hover:bg-green-400"
        onClick={() => handleClick()}
      >
        Add
      </button>
    </div>
  );
};

export default Modal;
