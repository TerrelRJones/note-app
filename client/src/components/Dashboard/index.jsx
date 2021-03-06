import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import NoteForm from "../NoteForm";
import Notes from "../Notes";

import "./style.css";

const Dashboard = ({ setAuthentication }) => {
  const [name, setName] = useState("");
  // const [user, setUser] = useState();

  const logOut = (e) => {
    e.preventDefault();
    setAuthentication(false);
    toast.success("Logged out");
    localStorage.removeItem("token");
  };

  const getName = async () => {
    const user = await fetch("/dashboard", {
      method: "GET",
      headers: { token: localStorage.token },
    });

    const res = await user.json();
    setName(res.username);
    // setUser(res.user_id);
  };

  useEffect(() => {
    getName();
  }, []);

  return (
    <div className="container">
      <div>
        <h1>NOTE APP</h1>
      </div>
      <div className="logOut-container">
        <button className="btn btn-dark" onClick={(e) => logOut(e)}>
          LOG OUT
        </button>
      </div>
      {/* <h1 className="title">NOTES</h1> */}
      <h3 className="title">Hello, {name}</h3>
      <Notes className="my-3" />
      <NoteForm />
    </div>
  );
};

export default Dashboard;
