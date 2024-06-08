// App.js
import { useDebugValue, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./Home/Nav";
import Home from "./Home/Home";
import Store from "./Products/Store";
import LoginReg from "./components/LoginReg";
import About from "./components/About";
import Banner from "./Home/Banner";
import Footer from "./Home/Footer";
import WineClub from "./WineClub/WineClub";
import MainDashboard from "./Dashboard/MainDashboard";
import UpdateUser from "./Users/UpdateUser";
import "@fontsource/open-sans";
import "./App.css"; // Ensure this line is present to include the CSS

function App(props) {
  const [productList, setProductList] = useState({});
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [cart, setCart] = useState([]);


  return (
    <HashRouter basename="/">
      <div id="root">
        <Nav
          isLoggedin={isLoggedin}
          setIsLoggedin={setIsLoggedin}
          cart={cart}
          setCart={setCart}
        />
        <Banner />
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/store"
              element={
                <Store
                  productList={productList}
                  setProductList={setProductList}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              exact
              path="/login"
              element={<LoginReg setIsLoggedin={setIsLoggedin} />}
            />
            {/* <Route exact path="/about" element={<About />} /> */}
            <Route
              path="/wineClub"
              element={<WineClub setIsLoggedin={setIsLoggedin} />}
            />
            <Route
              path="/mainDashboard"
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
