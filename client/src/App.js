// import './App.css';
import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Store from "./components/Store";
import LoginReg from "./components/LoginReg";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import WineCLub from "./components/WineClub";
import MainDashboard from "./components/MainDashboard";
import UpdateUser from "./components/UpdateUser";

import "@fontsource/open-sans";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <>
      {/* <BrowserRouter> */}
      <HashRouter basename="/">
        <Nav isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
        <Banner />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/store" element={<Store />} />
          <Route
            exact
            path="/login"
            element={<LoginReg setIsLoggedin={setIsLoggedin} />}
          />
          <Route exact path="/about" element={<About />} />
          <Route
            path="/wineClub"
            element={<WineCLub setIsLoggedin={setIsLoggedin} />}
          />
          <Route
            path="/MainDashboard"
            element={<MainDashboard isLoggedin={isLoggedin} />}
          />
          <Route path="/update/:_id" element={<UpdateUser />} />
        </Routes>
        <Footer isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
      </HashRouter>
    </>
  );
}

export default App;
