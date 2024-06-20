import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { useNavigate, Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import ShoppingCart from "../Checkout/ShoppingCart";

import WineBarIcon from "@mui/icons-material/WineBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useState, useEffect } from "react";
import "../style/nav.css";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useUser } from "../Context/UserContext";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Nav = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  // const { isLoggedin, setIsLoggedin } = props;
  const navigate = useNavigate();
  // const [user, setUser] = useState(null);
  const { isLoggedin, user, logout } = useUser();
  const [showDetails, setShowDetails] = useState(false);
  const [setProductList] = useState([]);

  console.log("nav user", user);
  // console.log("nav user firstName", user.firstName);
  console.log("nav is logged in", isLoggedin);

  // const [cart, setCart] = useState([])
  const {
    addItemToCart,
    removeItemFromCart,
    setWithExpiry,
    getWithExpiry,
    cart,
    setCart,
  } = props;

  console.log("nav cart", cart);

  useEffect(() => {
    const savedCart = getWithExpiry("cart");
    if (savedCart) {
      setCart(savedCart);
    }
    axios
      .get("http://localhost:8000/api/products/allProducts")
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => console.log(err.data));
  });

  const handleLogout = () => {
    navigate("/");
    logout();
  };

  const openMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const totalCartQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar color="default">
          {user ? (
            <Toolbar className="toolbar h-[5px]">
              <nav className="large-nav flex w-full">
                <div className="">
                  <WineBarIcon fontSize="medium" />
                </div>
                <div className="navLinks w-full justify-end">
                  <Link to="/" relative="path">
                    Home
                  </Link>
                  {/* <Link to="/about" relative="path">
                    About Us
                  </Link> */}
                  <Link to="/store" relative="path">
                    Store
                  </Link>
                  <Link to="/wineClub" relative="path">
                    Wine Club
                  </Link>
                  <Link to="/mainDashboard" relative="path">
                    {user.firstName}
                  </Link>
                  <Link onClick={handleLogout}>Logout</Link>
                </div>

                <div className="icons w-[50px] justify-center">
                  <Link
                    onClick={() => {
                      setShowDetails(true);
                    }}
                  >
                    <ShoppingCartIcon
                      fontSize="medium"
                      className="relative z-10"
                      style={{ color: "black" }}
                    />
                    {cart.length > 0 ? (
                      <div className="cartQuantity absolute top-3 right-6 bg-red-600 rounded-full h-[20px] w-[20px] flex items-center justify-center">
                        <p className="text-white m-1">{totalCartQuantity}</p>
                      </div>
                    ) : null}
                  </Link>
                  <div className="hamIcon" onClick={openMenu}>
                    {showMenu ? (
                      <CloseIcon fontSize="large" />
                    ) : (
                      <MenuIcon fontSize="large" />
                    )}
                  </div>
                </div>
              </nav>
              {showMenu && (
                <nav className="hamLinks">
                  <Link onClick={closeMenu} to="/" relative="path">
                    Home
                  </Link>

                  <Link onClick={closeMenu} to="/store" relative="path">
                    Store
                  </Link>
                  <Link onClick={closeMenu} to="/wineClub" relative="path">
                    Wine Club
                  </Link>
                  <Link onClick={closeMenu} to="/mainDashboard" relative="path">
                    {user.firstName}
                  </Link>
                  <Link
                    onClick={() => {
                      closeMenu();
                      logout();
                    }}
                  >
                    Logout
                  </Link>
                </nav>
              )}
            </Toolbar>
          ) : (
            <Toolbar className="toolbar h-[20px]">
              <nav className="large-nav flex w-full">
                <div>
                  <WineBarIcon fontSize="medium" />
                </div>
                <div className="navLinks w-full justify-end">
                  <Link to="/" relative="path">
                    Home
                  </Link>
                  {/* <Link to="/about" relative="path">
                    About Us
                  </Link> */}
                  <Link to="/store" relative="path">
                    Store
                  </Link>
                  <Link to="/wineClub" relative="path">
                    Wine Club
                  </Link>
                  <ScrollLink
                    to="footer"
                    smooth={true}
                    duration={100}
                    className="cursor-pointer"
                  >
                    Login
                  </ScrollLink>
                </div>
                <div className="icons w-[50px] justify-center">
                  <Link
                    onClick={() => {
                      setShowDetails(true);
                    }}
                  >
                    <ShoppingCartIcon
                      fontSize="medium"
                      className="relative z-10 "
                      style={{ color: "black" }}
                    />
                    {cart.length > 0 ? (
                      <div className="cartQuantity absolute top-3 right-6 bg-red-600 rounded-full h-[20px] w-[20px] flex items-center justify-center">
                        <p className="text-white m-1">{totalCartQuantity}</p>
                      </div>
                    ) : null}
                  </Link>
                  <div className="hamIcon" onClick={openMenu}>
                    {showMenu ? (
                      <CloseIcon fontSize="large" />
                    ) : (
                      <MenuIcon fontSize="large" />
                    )}
                  </div>
                </div>
              </nav>
              {showMenu && (
                <nav className="hamLinks">
                  <Link onClick={closeMenu} to="/" relative="path">
                    Home
                  </Link>
                  <Link onClick={closeMenu} to="/about" relative="path">
                    About Us
                  </Link>
                  <Link onClick={closeMenu} to="/store" relative="path">
                    Store
                  </Link>
                  <Link onClick={closeMenu} to="/wineClub" relative="path">
                    Wine Club
                  </Link>
                  <ScrollLink
                    onClick={closeMenu}
                    to="footer"
                    smooth={true}
                    duration={100}
                    className="cursor-pointer"
                  >
                    Login
                  </ScrollLink>
                </nav>
              )}
            </Toolbar>
          )}
        </AppBar>
      </HideOnScroll>
      {showDetails && (
        <div>
          <ShoppingCart
            cart={cart}
            setCart={setCart}
            showDetails={showDetails}
            setShowDetails={setShowDetails}
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
            setWithExpiry={setWithExpiry}
            getWithExpiry={getWithExpiry}
          />
        </div>
      )}
    </>
  );
};
export default Nav;
