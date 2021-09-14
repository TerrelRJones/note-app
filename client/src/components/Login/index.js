import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(newData);
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

    console.log(isLoggedIn);
  };

  return (
    <div className="login__contatiner">
      <form onSubmit={(e) => login(e)}>
        <label>Email</label>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => handle(e)}
          id="email"
          value={data.email}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => handle(e)}
          id="password"
          value={data.password}
        />
        <button>Login</button>
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
