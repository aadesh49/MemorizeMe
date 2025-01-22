import React, { useState, useEffect } from "react";
import Card from "./Card";

// Shuffle function to randomize cards
const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

// Function to generate cards for the 4x4 grid (16 cards, 8 pairs)
const generate4x4Cards = () => {
  const cardValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const cards = cardValues.slice(0, 8);
  return shuffleArray([...cards, ...cards]);
};

// Function to generate cards for the 6x6 grid (36 cards, 18 pairs)
const generate6x6Cards = () => {
  const cardValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const cards = cardValues.slice(0, 18);
  return shuffleArray([...cards, ...cards]);
};

const Gameboard = ({ onComplete }) => {
  const [gridSize, setGridSize] = useState(4); // Default to 4x4 grid
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [timer, setTimer] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    setFlippedIndices([]);
    setMatchedCards([]);
    setTurns(0);
    setTimer(0);
    setGameOver(false);
    setGameStarted(false);
    if (gridSize === 4) {
      setCards(generate4x4Cards());
    } else if (gridSize === 6) {
      setCards(generate6x6Cards());
    }
  }, [gridSize]);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameStarted, gameOver]);

  useEffect(() => {
    if (matchedCards.length === cards.length && gameStarted) {
      setGameOver(true);
      setGameStarted(false);
      onComplete(turns, timer);
    }
  }, [matchedCards, cards.length, turns, timer, gameStarted, onComplete]);

  const handleCardClick = (index) => {
    if (!gameStarted) {
      setGameStarted(true);
    }

    if (flippedIndices.length === 2 || flippedIndices.includes(index) || gameOver) return;

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    if (newFlippedIndices.length === 2) {
      setTurns((prevTurns) => prevTurns + 1);
      const [firstIndex, secondIndex] = newFlippedIndices;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards((prevMatched) => [...prevMatched, cards[firstIndex]]);
      }
      setTimeout(() => setFlippedIndices([]), 1000);
    }
  };

  const gridColumns = gridSize === 4 ? "grid-cols-4" : "grid-cols-6";

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-4">
        <label className="text-lg"><strong>Select Difficulty:</strong></label>
        <select
          value={gridSize}
          onChange={(e) => setGridSize(Number(e.target.value))}
          className="px-4 py-2 border rounded-lg"
        >
          <option value={4}>4x4</option>
          <option value={6}>6x6</option>
        </select>
      </div>

      <div className="text-2xl font-semibold">
        {gameOver
          ? `Game Over! Turns: ${turns} Time: ${timer}s` 
          : gameStarted
          ? `Turns: ${turns} Time: ${timer}s`
          : "Click a card to start the game."}
      </div>

      <div className={`grid ${gridColumns} gap-4`}>
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            onClick={() => handleCardClick(index)}
            isFlipped={flippedIndices.includes(index) || matchedCards.includes(card)}
            isMatched={matchedCards.includes(card)}
            size={gridSize === 6 ? "small" : "normal"}
          />
        ))}
      </div>
    </div>
  );
};

export default Gameboard;
