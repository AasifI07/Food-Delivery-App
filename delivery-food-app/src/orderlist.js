import React from 'react'
import shoppingbag from './assets/shopping-bag.png'

function Orderlist ({imgg, title, descritpion, amount }) {

  return (
    <div>
      <img src={imgg} alt='img' className='pizzaImage' />
      <p className="para2">{title}</p>
      <h4 className="hd20">{descritpion}</h4>
      <img className="non2" src={shoppingbag} alt='' />
      <p>{amount}</p>
    </div>
  )
}

export default Orderlist