import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Register = ({ setAuthentication }) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  // Login
  const register = async (e) => {
    e.preventDefault();
    const registered = await fetch("http://localhost:4001/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
    });
    const isRegistered = await registered.json();

    localStorage.setItem("token", isRegistered.token);
    setAuthentication(true);
  };

  return (
    <>
      <h1 className="my-3">REGISTER</h1>
      <form onSubmit={(e) => register(e)}>
        <label>Username</label>
        <input
          type="text"
          className="form-control my-3"
          id="username"
          placeholder="Enter username"
          onChange={(e) => handle(e)}
        />
        <label>Email</label>
        <input
          type="email"
          className="form-control my-3"
          id="email"
          placeholder="Enter email"
          onChange={(e) => handle(e)}
        />
        <label>Password</label>
        <input
          type="password"
          className="form-control my-3"
          id="password"
          placeholder="Password"
          onChange={(e) => handle(e)}
        />
        <Link to="/login">Login</Link>

        <button className="btn btn-dark mt-3 btn-block">Submit</button>
      </form>
    </>
  );
};

export default Register;
