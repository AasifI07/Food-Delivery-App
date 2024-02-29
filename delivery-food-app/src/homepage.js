import React from 'react'
import Header from "./header";
import Banner from "./banner";
import Body from "./body";
import Menu from "./menu";



import pizza from "./assets/pizza.png";
import burger from "./assets/burger.png";
import fries from "./assets/fries.png";
import friedchicken from "./assets/friedchicken.png";
import kebab from "./assets/kebab.png";
import donut from "./assets/donut.png";
import sandwich from "./assets/sandwich.png";

import imgg1 from './assets/imgg1.png';
import imgg2 from './assets/imgg2.png';
import imgg3 from './assets/imgg3.png';
import imgg4 from './assets/imgg4.png';
import imgg5 from './assets/imgg5.png';
import imgg6 from './assets/imgg6.png';
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

const menulist = [
  {
    id: 1,
    title: "GRAVY BURGER 1 MINI FILLET BOX MEAL",
    imgg: imgg1,
    desc: "An Original Recipe fillet burger, teamed with creamy Gravynnaise, cheese & topped with a cupped hash brown...",
    amount: 60,
  },
  {
    id: 2,
    title: "ORIGINAL RECIPE RICEBOX & DRINK",
    imgg: imgg2,
    desc: "One piece of our Original Recipe chicken fillet with steamed Tex Mex rice, fresh lettuce, sweetcorn, chopped tomatoes...",
    amount: 120,
  },
  {
    id: 3,
    title: "4 PIECE BONELESS DIPS MEAL",
    imgg: imgg3,
    desc: "Four of our 100% chicken breast Mini Fillets, with one cheese Original Dip, a regular side and drink. A no-fuss feast holiday...",
    amount: 150,
  },
];
const menulist2 = [
  {
    id: 4,
    title: "GRAVY BURGER 1 MINI FILLET BOX MEAL",
    imgg: imgg4,
    desc: "An Original Recipe fillet burger, teamed with creamy Gravynnaise, cheese & topped with a cupped hash brown....",
    amount: 60,
  },
  {
    id: 5,
    title: "ORIGINAL RECIPE RICEBOX & DRINK",
    imgg: imgg5,
    desc: "One piece of our Original Recipe chicken fillet with steamed Tex Mex rice, fresh lettuce, sweetcorn, chopped tomatoes...",
    amount: 120,
  },
  {
    id: 6,
    title: "4 PIECE BONELESS DIPS MEAL",
    imgg: imgg6,
    desc: "Four of our 100% chicken breast Mini Fillets, with one cheese Original Dip, a regular side and drink. A no-fuss feast holiday...",
    amount: 150,
  },
];

function Homepage() {
  return (
    <>
      <Header />

      <Banner />
      <div>
        <div className="hdng">
          <h1>OUR MENUS</h1>
        </div>

        <div>
          <div className="list">
            {data?.map((item) => (
              <div key={item?.id}>
                <a href="/order">
                  <Body heading={item?.heading} image={item?.image} />{" "}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="desc-list">
          <h4 className="h4">QUICK PICKS</h4>
          <h2>COMBO OFFERS</h2>
        </div>
        <div>
          <div className="list2">
            {menulist?.map((item) => (
              <div key={item?.id}>
                <div>
                  <Menu
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

        <div>
          <div className="list2">
            {menulist2?.map((item) => (
              <div key={item?.id}>
                <div>
                  <Menu
                    title={item?.title}
                    descritpion={item?.desc}
                    imgg={item?.imgg}
                    amount={item?.amount}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <button className="more">View More</button>
        </div>
      </div>
    <Footer/>
    </>

  )
}

export default Homepage ;
