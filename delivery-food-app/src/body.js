import React from 'react'


function Body({ heading, image }) {
  return (
    <div className="bg-color">
      <img className="bg" src={image} alt={image} />
      <h4 className="hd1">{heading}</h4>
    </div>
  );
}
export default Body;
