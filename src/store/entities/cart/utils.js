export const addItemToCart = (cartItems, item) => {
  const exist = cartItems.find(({ id }) => id === item.id);
  return exist
    ? cartItems.map(cartItem => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem))
    : [...cartItems, { ...item, quantity: 1 }];
};

export const decreaseItemFromCart = (cartItems, item) => {
  const exists = cartItems.find(({ id }) => id === item.id);
  if (exists) {
    return exists.quantity === 1
      ? cartItems.filter(cartItem => cartItem.id !== item.id)
      : cartItems.map(cartItem => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem));
  }
};
