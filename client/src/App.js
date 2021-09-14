import "./reset.css";
import "./app.css";
import Layout from "./layout";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Notes from "./components/Notes";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <Layout>
      <Header />
      {/* <h1 className="title">TIDAL</h1> */}
      <Main>
        <SideMenu />
        <Notes />
      </Main>
      <Footer />
    </Layout>
  );
}

export default App;
