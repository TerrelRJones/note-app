import React, { useEffect } from "react";

import Notes from "../Notes";

import "./style.css";

const Dashboard = ({ setAuthentication }) => {
  const logOut = () => {
    setAuthentication(false);
    localStorage.clear();
  };

  const getName = async () => {
    const user = await fetch("http://localhost:4001/dashboard", {
      method: "GET",
      headers: { token: localStorage.token },
    });
    const res = await user.json();

    console.log(res);
  };

  useEffect(() => {
    getName();
  }, []);

  return (
    <div className="container">
      <button onClick={() => logOut()}>LOG OUT</button>
      <h1>NOTES</h1>
      <Notes />
    </div>
  );
};

export default Dashboard;
