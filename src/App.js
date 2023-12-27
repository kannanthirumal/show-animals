import "./css/App.css";

import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  let randomIndex = Math.random() * animals.length;
  return animals[Math.floor(randomIndex)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    const animal = getRandomAnimal();
    setAnimals([...animals, animal]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <div className="instructions">
        <p>
          Add adorable animals to the list by clicking the add button and,
          express admiration by clicking anywhere inside the image to make the
          heart grow.
        </p>
      </div>
      <button onClick={handleClick}>Add Animal</button>

      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
