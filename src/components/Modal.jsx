import React, { useState } from "react";

const Modal = () => {
  const [note, setNote] = useState("");
  return (
    <div className="hidden">
      <p className="text-3xl p-3">Type your Note</p>
      <input
        className="bg-slate-300 p-2 text-black rounded-l-lg"
        placeholder="note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button className="bg-green-500 text-white p-2 mt-4 rounded-r-lg hover:bg-green-400">
        Add
      </button>
    </div>
  );
};

export default Modal;
