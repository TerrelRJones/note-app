import React, { useState, useEffect, Fragment } from "react";
import EditModal from "../EditModal";
import "./style.css";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [userId, setUserId] = useState();

  const getUserId = async () => {
    const user = await fetch("/dashboard", {
      method: "GET",
      headers: { token: localStorage.token },
    });

    const res = await user.json();
    setUserId(res.id);
    // console.log(userId);
  };

  useEffect(() => {
    getUserId();
  });

  const header = new Headers();
  header.append("Content-Type", "application/json");
  header.append("token", localStorage.token);

  // DELETE SINGLE NOTE
  const deleteNote = async (noteId) => {
    console.log(noteId + " //// " + userId);
    await fetch(`/create/note/${noteId}`, {
      method: "DELETE",
      headers: header,
      body: JSON.stringify({
        userId: userId,
      }),
    });
    window.location = "/dashboard";
  };

  // GET ALL NOTES
  const fetchData = async () => {
    // const data = await fetch(`/create/note/${userId}`);
    const data = await fetch(`/create/note/`);
    // console.log(userId + " inside fetch");
    const jsonData = await data.json();

    setNotes(jsonData);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                  <h3 className="note__container-username">
                    {item.user.username}
                  </h3>
                  <div className="btn-container">
                    <EditModal note={item} />
                    <button
                      className="delete-btn"
                      onClick={() => deleteNote(item.note_uuid)}
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
