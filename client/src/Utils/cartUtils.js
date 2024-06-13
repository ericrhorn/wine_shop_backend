const CART_exp = 30 * 60 * 1000;

export const addItemToCart = (cart, setCart, product, userId) => {
  const existingItem = cart.find((item) => item._id === product._id);
  let updatedCart;
  if (existingItem) {
    updatedCart = cart.map((item) =>
      item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    updatedCart = [...cart, { ...product, quantity: 1 }];
  }
  setCart(updatedCart);
  setWithExpiry("cart", updatedCart, CART_exp, userId);
};

export const removeItemFromCart = (cart, setCart, product, userId) => {
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
    setWithExpiry("cart", updatedCart, CART_exp, userId);
  }
};

export const setWithExpiry = (key, value, exp, userId) => {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + exp,
  };
  localStorage.setItem(`${userId}_${key}`, JSON.stringify(item));
};

export const getWithExpiry = (key, userId) => {
  const itemStr = localStorage.getItem(`${userId}_${key}`);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(`${userId}_${key}`);
    return null;
  }
  return item.value;
};
