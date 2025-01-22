import React, { useState, useEffect } from "react";
import Gameboard from "./components/Gameboard";
import "./index.css";
import img1 from '../public/images/a300654c-2d51-4e4e-9327-3118ebdb86b4.jpg'
import img2 from '../public/images/360_F_633134460_ijB1vMAZVwig5ZjwVoKmYfjgYqj3of1m.jpg'
import img3 from '../public/images/574422f8189ba1ff20c4694b22b25b69.jpg'
import img4 from '../public/images/ai-generated-2d-hero-battle-pvp-arena-background-casual-game-art-design-ai-generative-photo.jpg'
import img5 from '../public/images/8d9dbe2ec7d205952ad388687a0b4c8f.jpg'
import img6 from '../public/images/space-game-background-with-landscape-planet_107791-1700.avif'
import img7 from '../public/images/download.jpeg'
import img8 from '../public/images/360_F_334191354_zW1Fj9HPbfJdBPEVe2d6mcuT1w2g8K5y.jpg'
import img9 from '../public/images/cartoon-space-planet-surface-galaxy-landscape_8071-60792.avif'
import img10 from '../public/images/Game-Background-Graphics-76306020-1.jpg'
import img11 from '../public/images/download (1).jpeg'
import img12 from '../public/images/Starry night Image.png'
import img13 from '../public/images/Starry night Image.png'
import img14 from '../public/images/a-cartoon-scene-with-a-graveyard-and-trees-video.jpg'

const backgroundImages = [
  img1,  // Images are referenced from the public folder
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13, 
  img14
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


