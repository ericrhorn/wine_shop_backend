import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/shoppingCart.css";
import Button from "@mui/material/Button";

const ShoppingCart = (props) => {
  const { setShowDetails } = props;
  const navigate = useNavigate();

  const keepShopping = () => {
    navigate("/store");
  };

  const closeCart = () => {
    setShowDetails(false);
  };

  return (
    <>
      <div
        className="shoppingCart-overlay"
        onClick={() => setShowDetails(false)}
      >
        <div
          className="shoppingCart"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
        >
          <div>
            <Button
              className="float-right m-2 "
              size="small"
              variant="outlined"
              color="error"
              onClick={() => setShowDetails(false)}
            >
              Close
            </Button>
          </div>
          <div className="cartContainer">
            <div className="cartItem">
              <p>cart item</p>
            </div>
            <div className="cartItem">
              <p>cart item</p>
            </div>
            <div className="cartItem">
              <p>cart item</p>
            </div>
            <div className="cartItem">
              <p>cart item</p>
            </div>
            <div className="cartItem">
              <p>cart item</p>
            </div>
            <div className="cartItem">
              <p>cart item</p>
            </div>
            <div className="cartItem">
              <p>cart item</p>
            </div>
          </div>
          <div className="flex justify-evenly p-4">
            <Button
              onClick={() => {
                keepShopping();
                closeCart();
              }}
              size="small"
              variant="outlined"
            >
              Keep Shopping
            </Button>
            <Button size="small" variant="outlined">
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
