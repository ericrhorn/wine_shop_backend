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
import Dashboard from "./components/Dashboard";
import AdminDashboard from "./components/AdminDashboard";


import "@fontsource/open-sans";
import RegistrationForm from "./components/RegistrationForm";

function App(props) {

    const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <>
      {/* <BrowserRouter> */}

      <HashRouter basename="/">
        <Nav />
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
          <Route path="/wineClub" element={<WineCLub />} />
          <Route
            path="/register"
            element={<RegistrationForm setIsLoggedin={setIsLoggedin} />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard isLoggedin={isLoggedin} />}
          />
          <Route
            path="/adminDashboard"
            element={<AdminDashboard isLoggedin={isLoggedin} />}
          />
        </Routes>
      </HashRouter>
      <Footer />
      {/* </BrowserRouter> */}
      {/* <Footer/> */}
    </>
  );
}

export default App;
