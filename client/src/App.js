// App.js
import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Store from "./components/Store";
import LoginReg from "./components/LoginReg";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import WineClub from "./components/WineClub";
import MainDashboard from "./components/MainDashboard";
import UpdateUser from "./components/UpdateUser";
import "@fontsource/open-sans";
import "./App.css"; // Ensure this line is present to include the CSS

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <HashRouter basename="/">
      <div id="root">
        <Nav isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
        <Banner />
        <div className="main-content">
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
              element={<WineClub setIsLoggedin={setIsLoggedin} />}
            />
            <Route
              path="/MainDashboard"
              element={<MainDashboard isLoggedin={isLoggedin} />}
            />
            <Route path="/update/:_id" element={<UpdateUser />} />
          </Routes>
        </div>
        <Footer isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
      </div>
    </HashRouter>
  );
}

export default App;
