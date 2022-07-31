import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const Cart = () => {
  const CartItem = useContext(CartContext);
  const total = CartItem.items.reduce((a, b) => a + b.price, 0);
  return (
    <div
      className="shadow-lg p-3 mb-5 bg-body rounded mx-auto text-center"
      style={{ width: "20rem" }}
    >
      <h3>My Cart</h3>
      {CartItem &&
        CartItem.items.map((item) => {
          return (
            <li>
              {item.name} - {item.price}
            </li>
          );
        })}
      <h5>Total Bill: ${total}</h5>
    </div>
  );
};

export default Cart;
