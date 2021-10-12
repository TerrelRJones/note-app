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

  const header = new Headers();
  header.append("Content-Type", "application/json");
  header.append("token", localStorage.token);

  const createNote = async (e) => {
    e.preventDefault();
    // console.log(noteData.title + "...." + noteData.note);
    await fetch("/create/note", {
      method: "POST",
      headers: header,
      body: JSON.stringify({
        title: noteData.title,
        note: noteData.note,
      }),
    });
    window.location = "/dashboard";
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
