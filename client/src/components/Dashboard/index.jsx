import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import NoteForm from "../NoteForm";
import Notes from "../Notes";

import "./style.css";

const Dashboard = ({ setAuthentication }) => {
  const [name, setName] = useState("");

  const logOut = (e) => {
    e.preventDefault();
    setAuthentication(false);
    toast.success("Logged out");
    localStorage.removeItem("token");
  };

  const getName = async () => {
    const user = await fetch("http://localhost:4001/dashboard", {
      method: "GET",
      headers: { token: localStorage.token },
    });
    const res = await user.json();
    console.log(res);
    setName(res);
  };

  useEffect(() => {
    getName();
  }, []);

  return (
    <div className="container">
      <button onClick={(e) => logOut(e)}>LOG OUT</button>
      <h1>NOTES</h1>
      <h3 className="my-3">Hello, {name}</h3>
      <Notes className="my-3" />
      <NoteForm />
    </div>
  );
};

export default Dashboard;
