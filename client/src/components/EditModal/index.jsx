import e from "cors";
import React, { useState } from "react";
import "./style.css";

const EditModal = ({ note }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [newTitle, setNewTitle] = useState(note.title);
  const [newNote, setNewNote] = useState(note.note);

  const header = new Headers();
  header.append("Content-Type", "application/json");
  header.append("token", localStorage.token);

  // Edit single note
  const editNote = async () => {
    e.preventDefault();
    setShowEditModal(!showEditModal);

    await fetch(`/create/note/${note.note_uuid}`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify({
        userId: note.userId,
        title: newTitle,
        note: newNote,
      }),
    });
    window.location = "/dashboard";
  };

  return (
    <>
      <button className="edit_btn" onClick={() => setShowEditModal(true)}>
        Edit
      </button>
      {showEditModal ? (
        <div className="edit__modal-container">
          <h1>EDIT MODAL</h1>
          <form className="edit__modal-form" onSubmit={(e) => editNote(e)}>
            <label>
              Title
              <div className="form-group">
                <input
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
              </div>
            </label>
            <label>
              Note
              <div className="form-group">
                <textarea
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                />
              </div>
            </label>
            <div className="form-group">
              <input
                type="submit"
                value="Confirm Edit"
                className="btn btn-success"
              />
              <input
                type="submit"
                value="Cancel"
                className="btn btn-danger"
                onClick={() => setShowEditModal(!showEditModal)}
              />
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default EditModal;
