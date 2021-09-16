import { useState } from "react";

import Login from "./components/Login";
import Register from "./components/Register/";
import Dashboard from "./components/Dashboard/";
import "./reset.css";
import "./app.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const setAuthentication = (boolean) => {
    setIsAuth(boolean);
  };

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
