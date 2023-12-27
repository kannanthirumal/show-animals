import "./css/AnimalShow.css";

import { useState } from "react";

import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";

const svgMap = {
  bird: bird, //can write shorthand as below
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type]} />
      <div
        className="heart-container"
        style={{ width: 30 + 10 * clicks + "px", maxWidth: "50%" }}
      >
        <img className="heart" alt="heart" src={heart} />
      </div>
    </div>
  );
}

export default AnimalShow;
