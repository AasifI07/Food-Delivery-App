import React from "react";
import Header from "./header";
import Footer from "./footer";
import checkoutimg from "./assets/checkoutimg.png";
import Checkoutmenu from "./checkoutmenu";


import cartimage1 from "./assets/cart1.png";
import cartimage2 from "./assets/cart2.png";
import cartimage3 from "./assets/cart3.png";

const Checkoutmenulist = [
  {
    id: 1,
    title: "GRAVY BURGER 1 MINI FILLET BOX MEAL",
    imgg: cartimage1,
    desc: "An Original Recipe fillet burger, teamed with creamy Gravynnaise, cheese & topped with a cupped hash brown...",
    amount: 60,
  },
  {
    id: 2,
    title: "ORIGINAL RECIPE RICEBOX & DRINK",
    imgg: cartimage2,
    desc: "One piece of our Original Recipe chicken fillet with steamed Tex Mex rice, fresh lettuce, sweetcorn, chopped tomatoes...",
    amount: 120,
  },
  {
    id: 3,
    title: "4 PIECE BONELESS DIPS MEAL",
    imgg: cartimage3,
    desc: "Four of our 100% chicken breast Mini Fillets, with one cheese Original Dip, a regular side and drink. A no-fuss feast holiday...",
    amount: 150,
  },
];

function Checkout() {
  return (
    <div>
      <Header />

      <div className="chkout_head">
        <h2>HOME/PIZZA/PRODUCT DETAILS</h2>
      </div>
      <div>
        <div className="chkout_body">
          <div>
            <img src={checkoutimg} alt="" />
          </div>
          <div>
            <div className="chkout_01">
              <h4 className="chkout_h4">#1234567890 |Burger</h4>
              <h2 className="chkout_h2">GRAVY BURGER 1 MINI FILLET BOX MEAL</h2>
              <p>
                An Original Recipe fillet burger, teamed with creamy
                Gravynnaise™, cheese & topped with a cupped hash brown made to
                be filled with lashings of your Gravy side, all in a glazed bun.
                Served with a Mini Fillet, Fries, a Gravynnaise™ dip & drink.
              </p>
            </div>
            <div className="size_btns">
              <div className="btns">
                <div className="btn_s">
                  <button>S</button>
                </div>
                <div>
                  <button className="btn_m">M</button>
                </div>
                <div className="btn_l">
                  <button>L</button>
                </div>
              </div>
            </div>
            <div className="chkout_p">
              <div className="p1_dec">
                <p1>Price:</p1>
              </div>
              <div className="p2_dec">
                <p2>80Kr</p2>
              </div>
              <div className="p3_dec">
                <p3>60Kr</p3>
              </div>
              <div className="p4_dec">
                <p4>*Includes Taxes</p4>
              </div>
            </div>
            <div className="chkout_foot">
              <div>
                <input type="offer" placeholder="15% christmas Offer" />
              </div>
              <div className="chkout_avail">
                <p>Food Availability : available</p>
              </div>
            </div>
            <div>
              <button className="chkout_cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="cart_final">
        <div>
          <div>
            <div className="list23">
              {Checkoutmenulist?.map((item) => (
                <div key={item?.id}>
                  <div>
                    <Checkoutmenu
                      title={item?.title}
                      descritpion={item?.desc}
                      imgg={item?.imgg}
                      amount={item?.amount}
                      shoppingbag={item?.shoppingbag}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Checkout;
