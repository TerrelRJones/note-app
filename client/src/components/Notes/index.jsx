import React, { useState, useEffect, Fragment } from "react";
import "./style.css";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const header = new Headers();
  header.append("Content-Type", "application/json");
  header.append("token", localStorage.token);

  // DELETE SINGLE NOTE
  const deleteNote = async (id, user) => {
    // console.log(id + " //// " + userId);
    await fetch(`/create/note/${id}`, {
      method: "DELETE",
      headers: header,
      body: JSON.stringify({
        userId: user,
      }),
    });
  };
  // GET ALL NOTES
  const fetchData = async () => {
    const data = await fetch("/create/note");
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
                <h1 className="note__card-title">{item.title}</h1>
                <h3 className="note__card-note">{item.note}</h3>
                <div className="notes__delete-btn">
                  <h3>{item.user.username}</h3>
                  <div className="btn-container">
                    <button
                      className="edit-btn"
                      onClick={() => deleteNote(item.note_uuid, item.user.id)}
                    >
                      EDIT
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteNote(item.note_uuid, item.user.id)}
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
