import { useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [items, setItems] = useState([
    { id: 1, img: "./game-img/angular.png", stat: "" },
    { id: 1, img: "./game-img/angular.png", stat: "" },
    { id: 2, img: "./game-img/css.png", stat: "" },
    { id: 2, img: "./game-img/css.png", stat: "" },
    { id: 3, img: "./game-img/html.png", stat: "" },
    { id: 3, img: "./game-img/html.png", stat: "" },
    { id: 4, img: "./game-img/js.png", stat: "" },
    { id: 4, img: "./game-img/js.png", stat: "" },
    { id: 5, img: "./game-img/nodejs.png", stat: "" },
    { id: 5, img: "./game-img/nodejs.png", stat: "" },
    { id: 6, img: "./game-img/react.png", stat: "" },
    { id: 6, img: "./game-img/react.png", stat: "" },
    { id: 7, img: "./game-img/scss.png", stat: "" },
    { id: 7, img: "./game-img/scss.png", stat: "" },
    { id: 8, img: "./game-img/vue.png", stat: "" },
    { id: 8, img: "./game-img/vue.png", stat: "" },
  ]);

  return (
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};

export default Cards;
