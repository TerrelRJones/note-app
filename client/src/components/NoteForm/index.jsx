import React, { useState } from "react";
import "./style.css";

const NoteForm = () => {
  const [noteData, setNoteData] = useState({
    title: "",
    note: "",
  });

  const handle = (e) => {
    const newNoteData = { ...noteData };
    newNoteData[e.target.id] = e.target.value;
    setNoteData(newNoteData);
  };

  const createNote = async (e) => {
    e.preventDefault();
    // console.log(noteData.title + "...." + noteData.note);
    await fetch("http://localhost:4001/create/note", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: noteData.title,
        note: noteData.note,
      }),
    });
  };

  return (
    <div className="form__container">
      <form className="form" onSubmit={(e) => createNote(e)}>
        <label>Title</label>
        <input id="title" onChange={(e) => handle(e)} />
        <label>Note</label>
        <textarea
          id="note"
          className="form__text-area"
          onChange={(e) => handle(e)}
        ></textarea>
        <button className="btn btn-dark">ADD NOTE</button>
      </form>
    </div>
  );
};

export default NoteForm;
