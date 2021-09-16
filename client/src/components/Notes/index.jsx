import React, { useState, useEffect, Fragment } from "react";
import "./style.css";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  // DELETE SINGLE NOTE
  const deleteNote = async (id) => {
    console.log(id);
    await fetch(`http://localhost:4001/create/note/${id}`, {
      method: "DELETE",
    });
  };
  // GET ALL NOTES
  const fetchData = async () => {
    const data = await fetch("http://localhost:4001/create/note");
    const jsonData = await data.json();

    setNotes(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="note__container">
        {notes.map((item) => {
          return (
            <div key={item.note_uuid}>
              <div className="note__card">
                <h1>{item.title}</h1>
                <h3>{item.note}</h3>
                <h3>{item.user.username}</h3>
                <button onClick={() => deleteNote(item.note_uuid)}>
                  DELETE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
