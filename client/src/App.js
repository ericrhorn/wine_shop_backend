// import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Store from "./components/Store";
import LoginReg from "./components/LoginReg";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import "@fontsource/open-sans";

function App() {
  return (
    <>
      {/* <BrowserRouter> */}

      <HashRouter basename="/">
        <Nav />
        <Banner />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/store" element={<Store />} />
          <Route exact path="/login" element={<LoginReg />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </HashRouter>
      <Footer />
      {/* </BrowserRouter> */}
      {/* <Footer/> */}
    </>
  );
}

export default App;
