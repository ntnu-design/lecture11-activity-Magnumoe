import React from "react";
import CoffeeButton from "./CoffeeButton";
import "./CoffeeControl.css";
import CoffeeRecipe from "./CoffeeRecipe";
import Thermos from "./Thermos";

const CoffeeControl = (props) => {
  console.log(props);
  return (
    <div className="CoffeeControl">
      <Thermos {...props} />

      <div className="flex-columns">
        <CoffeeButton litersToBrew="2.2" onClick={props.onClick} />

        <CoffeeButton litersToBrew="1.1" onClick={props.onClick} />

        <CoffeeButton litersToBrew="0.5" onClick={props.onClick} />

        <CoffeeRecipe
          coffeeBrand="Evergood"
          grindingSettings="6"
          litresWater="3.2"
        />
      </div>
    </div>
  );
};
export default CoffeeControl;
