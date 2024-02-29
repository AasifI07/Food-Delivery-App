import React from "react";
import Header from "./header";
import Body from "./body";

import pizza from "./assets/pizza.png";
import burger from "./assets/burger.png";
import fries from "./assets/fries.png";
import friedchicken from "./assets/friedchicken.png";
import kebab from "./assets/kebab.png";
import donut from "./assets/donut.png";
import sandwich from "./assets/sandwich.png";
import Orderlist from "./orderlist";


import img1 from "./assets/gravy1.png";
import img2 from "./assets/gravy2.png";
import img3 from "./assets/gravy3.png";
import img4 from "./assets/gravy4.png";
import img5 from "./assets/gravy5.png";
import img6 from "./assets/gravy6.png";
import img7 from "./assets/gravy7.png";
import img8 from "./assets/gravy8.png";
import img9 from "./assets/gravy9.png";
import Footer from "./footer";

const data = [
  { id: 1, heading: "PIZZA", image: pizza },
  { id: 2, heading: "BURGER", image: burger },
  { id: 3, heading: "FRIES", image: fries },
  { id: 4, heading: "CHICKEN", image: friedchicken },
  { id: 5, heading: "WRAPS", image: kebab },
  { id: 6, heading: "DONUT", image: donut },
  { id: 7, heading: "SANDWICH", image: sandwich },
];



const orderlist1 = [
  {
    id: 1,
    title: "GRAVY BURGER 1 MINI FILLET BOX MEAL",
    imgg: img1,
    desc: "An Original Recipe fillet burger, teamed with creamy Gravynnaise, cheese & topped with a cupped hash brown...",
    amount: 60,
  },
  {
    id: 2,
    title: "ORIGINAL RECIPE RICEBOX & DRINK",
    imgg: img2,
    desc: "One piece of our Original Recipe chicken fillet with steamed Tex Mex rice, fresh lettuce, sweetcorn, chopped tomatoes...",
    amount: 120,
  },
  {
    id: 3,
    title: "4 PIECE BONELESS DIPS MEAL",
    imgg: img3,
    desc: "Four of our 100% chicken breast Mini Fillets, with one cheese Original Dip, a regular side and drink. A no-fuss feast holiday...",
    amount: 150,
  },
  {
    id: 4,
    title: "GRAVY BURGER 1 MINI FILLET BOX MEAL",
    imgg: img4,
    desc: "An Original Recipe fillet burger, teamed with creamy Gravynnaise, cheese & topped with a cupped hash brown....",
    amount: 60,
  },
  {
    id: 5,
    title: "ORIGINAL RECIPE RICEBOX & DRINK",
    imgg: img5,
    desc: "One piece of our Original Recipe chicken fillet with steamed Tex Mex rice, fresh lettuce, sweetcorn, chopped tomatoes...",
    amount: 120,
  },
  {
    id: 6,
    title: "4 PIECE BONELESS DIPS MEAL",
    imgg: img6,
    desc: "Four of our 100% chicken breast Mini Fillets, with one cheese Original Dip, a regular side and drink. A no-fuss feast holiday...",
    amount: 150,
  },
  {
    id: 1,
    title: "GRAVY BURGER 1 MINI FILLET BOX MEAL",
    imgg: img7,
    desc: "An Original Recipe fillet burger, teamed with creamy Gravynnaise, cheese & topped with a cupped hash brown...",
    amount: 60,
  },
  {
    id: 2,
    title: "ORIGINAL RECIPE RICEBOX & DRINK",
    imgg: img8,
    desc: "One piece of our Original Recipe chicken fillet with steamed Tex Mex rice, fresh lettuce, sweetcorn, chopped tomatoes...",
    amount: 120,
  },
  {
    id: 3,
    title: "4 PIECE BONELESS DIPS MEAL",
    imgg: img9,
    desc: "Four of our 100% chicken breast Mini Fillets, with one cheese Original Dip, a regular side and drink. A no-fuss feast holiday...",
    amount: 150,
  },
];


function Order() {
  return (
    <div>
      <Header />
      <div className="order_ttl">
        <div>
          <h2 className="order_ttl1">ORDER</h2>
          <p>Home/Pizza</p>
        </div>
      </div>
      <div className="list_2">
        {data?.map((item) => (
          <div key={item?.id}>
            <Body heading={item?.heading} image={item?.image} />{" "}
          </div>
        ))}
      </div>
      <div>
        <div className="order_pizza">
          <h2>PIZZA</h2>
          <input type="Search" placeholder="Search Your Favourites" />
          <input type="sort" placeholder="Sort By" />
        </div>
      </div>
      <div>
        <div className="list_1">
          {orderlist1?.map((item) => (
            <div key={item?.id} className="menu-bg2">
                <a href="/Checkout ">
                  <Orderlist
                  title={item?.title}
                  descritpion={item?.desc}
                  imgg={item?.imgg}
                  amount={item?.amount}
                />
                </a>
            </div>
          ))}
        </div>
      </div>

      <div className="nxt_btns">
<button className="prvs">Previous</button>
<button className="nxt">Next</button>


      </div>
<Footer/>
    </div>
  );
}

export default Order;
