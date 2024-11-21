import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  // Toggle cart state
  function handleAddToCartClick() {
    setIsInCart((prevState) => !prevState);
  }

  // Determine the class for the <li>
  const liClass = isInCart ? "in-cart" : "";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className={isInCart ? "remove" : "add"} 
        onClick={handleAddToCartClick}
      >
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
