import React from 'react'
import shoppingbag from './assets/shopping-bag.png';

function Checkoutmenu( {imgg, title, descritpion, amount, img = "image" }) {
  return (
    <div className="menu-bg3">
    <img src={imgg} alt={img} />
    <p className="para3">{title}</p>
    <h4 className="hd23">{descritpion}</h4>
    <img className="non3" src={shoppingbag} alt={img} />
    <p>{amount}</p>
  </div>
  )
}

export default Checkoutmenu;