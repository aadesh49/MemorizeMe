import React from "react";

const DifficultySelector = ({ difficulty, setDifficulty }) => (
  <div className="mb-6">
    <label className="mr-2 text-lg">Select Difficulty:</label>
    <select
      value={difficulty}
      onChange={(e) => setDifficulty(parseInt(e.target.value))}
      className="p-2 rounded-lg border"
    >
      <option value={4}>4x4 Grid</option>
      <option value={6}>6x6 Grid</option>
    </select>
  </div>
);

export default DifficultySelector;
