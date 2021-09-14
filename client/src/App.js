import Layout from "./layout";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Notes from "./components/Notes";
import SideMenu from "./components/SideMenu";
import Login from "./components/Login";
import Register from "./components/Register";

import "./reset.css";
import "./app.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Header />
            <Main>
              <SideMenu />
              <Notes />
            </Main>
            <Footer />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
