import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ setAuthentication }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  // Login
  const login = async (e) => {
    e.preventDefault();
    const loggedIn = await fetch("http://localhost:4001/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    const isLoggedIn = await loggedIn.json();

    localStorage.setItem("token", isLoggedIn.token);
    setAuthentication(true);
  };

  return (
    <div className="login__contatiner">
      <form onSubmit={(e) => login(e)}>
        <label>Email</label>
        <input
          className="form-control my-3"
          type="text"
          placeholder="email"
          onChange={(e) => handle(e)}
          id="email"
          value={data.email}
        />
        <label>Password</label>
        <input
          className="form-control my-3"
          type="password"
          placeholder="password"
          onChange={(e) => handle(e)}
          id="password"
          value={data.password}
        />
        <button className="btn btn-dark ">Login</button>
      </form>
      <div>
        <Link to="/register">
          <h3>Register</h3>
        </Link>
      </div>
    </div>
  );
};

export default Login;
