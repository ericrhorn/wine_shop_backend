import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/shoppingCart.css";
import Button from "@mui/material/Button";

const ShoppingCart = (props) => {
  const {  cart, setCart, setShowDetails, addItemToCart, removeItemFromCart } =
    props;
  const navigate = useNavigate();

  const keepShopping = () => {
    navigate("/store");
  };

  const closeCart = () => {
    setShowDetails(false);
  };

  const increaseQuantity = (idx) => {
    addItemToCart(cart[idx]);
  };

  const decreaseQuantity = (idx) => {
    removeItemFromCart(cart[idx]);
  };

  const total = cart
    .reduce((total, item) => total + item.winePrice * item.quantity, 0)
    .toFixed(2);

  return (
    <>
      <div
        className="shoppingCart-overlay"
        onClick={() => setShowDetails(false)}
      >
        <div className="shoppingCart" onClick={(e) => e.stopPropagation()}>
          <div>
            <Button
              className="float-right m-2"
              size="small"
              variant="outlined"
              color="error"
              onClick={() => setShowDetails(false)}
            >
              Close
            </Button>
          </div>
          {cart.length > 0 ? (
            <div className="cartContainer">
              {cart.map((item, idx) => (
                <div
                  key={idx}
                  className="flex w-full m-2 px-4 flex-col sm:flex-row"
                >
                  <div className="cartItem flex justify-between w-full">
                    <div className="name flex-grow">
                      <p>{item.wineName}</p>
                    </div>
                    <div className="flex">
                      <div className="price flex-shrink-0 ml-4">
                        <p>${item.winePrice.toFixed(2)}</p>
                      </div>
                      <div className="quantity flex-shrink-0 ml-4">
                        <p>{item.quantity}</p> {/* Display quantity */}
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-2 sm:mt-0 sm:ml-4 h-full">
                    <Button
                      onClick={() => decreaseQuantity(idx)}
                      size="small"
                      variant="outlined"
                    >
                      -
                    </Button>
                    <Button
                      onClick={() => increaseQuantity(idx)}
                      size="small"
                      variant="outlined"
                    >
                      +
                    </Button>
                  </div>
                </div>
              ))}
              <div className="flex justify-center w-full">
                <p>Total: ${total}</p>
              </div>
            </div>
          ) : (
            <div className="cartContainer">
              <div className="cartItem w-full text-center">
                <strong>
                  <p>No items in cart</p>
                </strong>
              </div>
            </div>
          )}
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
