import React from 'react'
import logo from './assets/logo.png';
import Like from './assets/Like.png';
import cart from './assets/cart.png';
import Notification from './assets/Notification.png';


function Header(){
    return (
   <>
    <nav className="Navi">
        <div className='Navi1'>
            <div className='abt'>About Us</div>
            <div className='menu'>Menu</div>
            <div className='cnct'>Contact</div>
        </div>

        <div className='navi2'>
            <img src={logo} alt=''/>
        </div>

        <div>
            <div className='Navi3'>
                <img className='lke' src={Like} alt=''/>
                <img className='ntfn' src={Notification} alt=''/>
                <img className='crt'src={cart} alt=''/>
                <button className='btn'>Login/Sign Up</button>
            </div>
        </div>
    </nav>
   </>

    )
}
export default Header;