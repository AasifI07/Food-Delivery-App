import React from "react";
import unnamed from "./assets/unnamed.png";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import instagram from "./assets/instagram.png";
import whatsapp from "./assets/whatsapp.png";

function Footer() {
  return (
    <div>
      <div className="bg-0">
        <div className="foot">
          <div className="img">
            <img src={unnamed} alt=" " />
            <div className="tabb">
              <h2>Kylling og Pizza</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
                sed suscipit laudantium molestiae cumque repellendus itaque
                quisquam cum facere,mollitia provident doloremque, eum, deleniti
                vitae excepturi quos rerum autem incidunt.
              </p>
            </div>
          </div>
          <div>
            <h3 className="cato">CATEGORIES</h3>
            <ul className="li">
              <li>Pizza</li>
              <li>Burger</li>
              <li>Sandwich</li>
              <li>Deserts</li>
              <li>Chicken</li>
            </ul>
          </div>

          <div>
            <h3 className="cato2">CATEGORIES</h3>
            <ul className="li2">
              <li>Fries</li>
              <li>Combo</li>
              <li>Drinks</li>
              <li>IceCream</li>
              <li>Kebab</li>
            </ul>
          </div>

          <div>
            <h3 className="pge">PAGES</h3>
            <ul className="li3">
              <li>About us</li>
              <li>Menu</li>
              <li>Help</li>
              <li>Terms</li>
              <li>Policies</li>
            </ul>
          </div>
          <div>
            <div>
              <div className="follow">
                <h3>FOLLOW US ON</h3>
              </div>
              <img src={facebook} alt="img" />
              <img src={twitter} alt="img" />
              <img src={instagram} alt="img" />
              <img src={whatsapp} alt="img" />
              <div className="det">
                <p>22 06 58 88</p>
                <p>help@kyllingogpizza.com</p>
                <p>Sinsenterrassen 14, 0574 Oslo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="copy">
          <h4>copyrights@kyllingogpizza 2021</h4>
        </div>
      </div>
    </div>
    
  );
}

export default Footer;
