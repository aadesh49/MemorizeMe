import React, { useState, useEffect } from "react";
import Gameboard from "./components/Gameboard";
import "./index.css";

const backgroundImages = [
  '/images/a300654c-2d51-4e4e-9327-3118ebdb86b4.jpg',  // Images are referenced from the public folder
  '/images/360_F_633134460_ijB1vMAZVwig5ZjwVoKmYfjgYqj3of1m.jpg',
  '/images/574422f8189ba1ff20c4694b22b25b69.jpg',
  '/images/ai-generated-2d-hero-battle-pvp-arena-background-casual-game-art-design-ai-generative-photo.jpg',
  '/images/8d9dbe2ec7d205952ad388687a0b4c8f.jpg',
  '/images/space-game-background-with-landscape-planet_107791-1700.avif',
  '/images/download.jpeg',
  '/images/360_F_334191354_zW1Fj9HPbfJdBPEVe2d6mcuT1w2g8K5y.jpg',
  '/images/cartoon-space-planet-surface-galaxy-landscape_8071-60792.avif',
  '/images/Game-Background-Graphics-76306020-1.jpg'
];

const getRandomBackground = () => {
  const index = Math.floor(Math.random() * backgroundImages.length);
  return backgroundImages[index];
};

const App = () => {
  
  const [gridSize, setGridSize] = useState(4);
  const [randomBackground, setRandomBackground] = useState(getRandomBackground());

  useEffect(() => {
    setRandomBackground(getRandomBackground());  // Set random background on component load
  }, []);  

  return (
    <div className="App p-6" 
    style={{
      backgroundImage: `url(${randomBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      filter: 'brightness(70%)',
      minHeight: '100vh',
    }}
    >
      <Gameboard gridSize={4} />
    </div>
  );
};

export default App;

