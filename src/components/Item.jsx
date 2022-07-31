import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const Item = ({ name, price }) => {
  const CartItem = useContext(CartContext);
  return (
    <div
      className="shadow-lg p-3 mb-5 bg-body rounded mx-auto text-center"
      style={{ width: "16rem" }}
    >
      <h4>Name - {name}</h4>
      <p>Price - {price}</p>
      <button
        className="btn btn-primary"
        onClick={() =>
          CartItem.setItems([...CartItem.items, { name: name, price: price }])
        }
      >
        Add
      </button>
    </div>
  );
};

export default Item;
