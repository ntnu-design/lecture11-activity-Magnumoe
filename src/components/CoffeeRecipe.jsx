import React from "react";
import "./CoffeeRecipe.css";

const CoffeeRecipe = ({ coffeeBrand, grindingSettings, litresWater }) => {
  const normalisedWaterLevel = Math.min(2.2, Math.max(0, litresWater));
  return (
    <div>
      <p>
        Coffee:
        <span> {coffeeBrand}</span>, Grinding settings:
        <span> {grindingSettings}</span>, Water:
        <span> {normalisedWaterLevel}</span>
      </p>
      <div>&#9733;&#9733;&#9733;&#9733;&#9734;</div>
    </div>
  );
};
CoffeeRecipe.defaultProps = {
  coffeeBrand: "Evergood",
  grindingSettings: "5",
  litresWater: "1.0",
};

export default CoffeeRecipe;
