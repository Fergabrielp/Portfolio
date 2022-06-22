import React from "react";

const Card = ({ item }) => {
  console.log(item.img);
  return (
    <div className="container">
      <img src={item.img} alt="hola" />
    </div>
  );
};

export default Card;
