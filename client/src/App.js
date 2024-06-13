// App.js
import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./Home/Nav";
import Home from "./Home/Home";
import Store from "./Products/Store";
import LoginReg from "./components/LoginReg";
// import About from "./components/About";
import Banner from "./Home/Banner";
import Footer from "./Home/Footer";
import WineClub from "./WineClub/WineClub";
import MainDashboard from "./Dashboard/MainDashboard";
import UpdateUser from "./Users/UpdateUser";
import "@fontsource/open-sans";
import "./App.css"; // Ensure this line is present to include the CSS

import { UserProvider } from "./Context/UserContext";


const CART_exp = 30 * 60 * 1000;

function App(props) {
  const [productList, setProductList] = useState({});
  const [cart, setCart] = useState([]);

  const addItemToCart = (product) => {
    const existingItem = cart.find((item) => item._id === product._id);
    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(updatedCart);
    setWithExpiry("cart", updatedCart, CART_exp);
  };

  const removeItemFromCart = (product) => {
    const existingItem = cart.find((item) => item._id === product._id);
    let updatedCart;
    if (existingItem) {
      if (existingItem.quantity > 1) {
        updatedCart = cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        updatedCart = cart.filter((item) => item._id !== product._id);
      }
      setCart(updatedCart);
      setWithExpiry("cart", updatedCart, CART_exp);
    }
  };

  const setWithExpiry = (key, value, exp) => {
    const now = new Date();
    const item = {
      value: value,
      expiry: now.getTime() + exp,
    };
    localStorage.setItem(key, JSON.stringify(item));
  };

  const getWithExpiry = (key) => {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  };

  // const isInCart = (product) => {
  //   return cart.some((item) => item._id === product._id);
  // };

  return (
    <HashRouter basename="/">
      <UserProvider>
        <div id="root">
          <Nav
            cart={cart}
            setCart={setCart}
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
            setWithExpiry={setWithExpiry}
            getWithExpiry={getWithExpiry}
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
                    addItemToCart={addItemToCart}
                    removeItemFromCart={removeItemFromCart}
                    setWithExpiry={setWithExpiry}
                    getWithExpiry={getWithExpiry}
                  />
                }
              />
              <Route exact path="/login" element={<LoginReg />} />
              {/* <Route exact path="/about" element={<About />} /> */}
              <Route path="/wineClub" element={<WineClub />} />
              <Route path="/mainDashboard" element={<MainDashboard />} />
              <Route path="/update/:_id" element={<UpdateUser />} />
              {/* <Route path="/userUpdate/:_id" element={<UserUpdate />} /> */}
            </Routes>
          </div>
          <Footer />
        </div>
      </UserProvider>
    </HashRouter>
  );
}

export default App;
