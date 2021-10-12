import { useState, useEffect } from "react";

import Login from "./components/Login";
import Register from "./components/Register/";
import Dashboard from "./components/Dashboard/";
// import "./reset.css";
import "./app.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

toast.configure();

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const setAuthentication = (boolean) => {
    setIsAuth(boolean);
  };

  const isAuthenticated = async () => {
    try {
      const responese = await fetch("/verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const data = await responese.json();

      data === true ? setIsAuth(true) : setIsAuth(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  // check if user is authenticated upon page refresh
  useEffect(() => {
    isAuthenticated();
  }, [isAuth]);

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route
            path="/login"
            render={(props) =>
              !isAuth ? (
                <Login {...props} setAuthentication={setAuthentication} />
              ) : (
                <Redirect to="/dashboard" />
              )
            }
          />
          <Route
            path="/register"
            render={(props) =>
              !isAuth ? (
                <Register {...props} setAuthentication={setAuthentication} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/dashboard"
            render={(props) =>
              isAuth ? (
                <Dashboard {...props} setAuthentication={setAuthentication} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/"
            render={(props) =>
              !isAuth ? (
                <Login {...props} setAuthentication={setAuthentication} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
