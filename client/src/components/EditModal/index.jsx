import React, { useState } from "react";
import "./style.css";

const EditModal = ({ note }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const header = new Headers();
  header.append("Content-Type", "application/json");
  header.append("token", localStorage.token);

  // Edit single note
  // const editNote = async (id, user, note) => {
  //   setShowEditModal(!showEditModal);
  //   console.log(id + " " + note + " " + user);
  // await fetch(`/create/note/${id}`, {
  //   method: "PUT",
  //   headers: header,
  //   body: JSON.stringify({
  //     userId: user,
  //     note: note,
  //   }),
  // });
  // window.location = "/dashboard";
  // };

  return (
    <>
      <button className="edit_btn" onClick={() => setShowEditModal(true)}>
        Edit
      </button>
      {showEditModal ? (
        <div className="edit__modal-container">
          <h1>EDIT MODAL</h1>
          <form className="edit__modal-form">
            <label>
              Title
              <div className="form-group">
                <input value={note.title} />
              </div>
            </label>
            <label>
              Note
              <div className="form-group">
                <textarea value={note.note} />
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
