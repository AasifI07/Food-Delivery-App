import React from "react";
import shoppingbag from "./assets/shopping-bag.png";

function Menu( {imgg, title, descritpion, amount, img = "image" }) {
  
  return (
    <div className="menu-bg">
      <img src={imgg} alt={img} />
      <p className="para">{title}</p>
      <h4 className="hd2">{descritpion}</h4>
      <img className="non" src={shoppingbag} alt={img} />
      <p>{amount}</p>
    </div>
  );
}

export default Menu;
