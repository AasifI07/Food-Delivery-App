import React from 'react';
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import instagram from "./assets/instagram.png";
import whatsapp from "./assets/whatsapp.png";
import IMG from "./assets/Banner.png";

function Banner() {
  return (
    <>
      <div className="title">
     
        <div className="text">
        
         
          
          <h2>Welcome to Kylling og Pizza</h2>
          
          
        </div>

        <div className="icons">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
          <img src={whatsapp} alt="" />
        </div>
      </div>
    </>
  );
}
export default Banner;
