import React from "react";

const Card = ({ card, onClick, isFlipped, isMatched, size }) => {
  const cardSizeClass = size === "small" ? "w-14 h-14 text-xs" : "w-24 h-24 text-lg"; // Smaller cards for 6x6 grid

  return (
    <div
      className={`flex items-center justify-center ${cardSizeClass} border-2 border-gray-500 rounded-md ${
        isFlipped || isMatched ? "bg-blue-800 text-white" : "bg-gray-400"
      } cursor-pointer`}
      onClick={onClick}
    >
      {isFlipped || isMatched ? card : "?"}
    </div>
  );
};

export default Card;
