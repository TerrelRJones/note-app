import React, { useState } from "react";
import "./style.css";

const NoteForm = () => {
  const [noteData, setNoteData] = useState({
    userUuid: "",
    title: "",
    note: "",
  });

  const handle = (e) => {
    const newData = { ...noteData };
    newData[e.target.id] = e.target.value;
    setNoteData(newData);
  };

  const createNote = async (e) => {
    e.preventDefault();
    console.log(
      noteData.title + "...." + noteData.note + " " + noteData.userUuid
    );
    // const note = await fetch("http://localhost:4001/create/note", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     userUuid: noteData.userUuid,
    //     title: noteData.title,
    //     note: noteData.note,
    //   }),
    // });
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
