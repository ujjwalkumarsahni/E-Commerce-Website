import React from "react";
import CardIteml from "./CardIteml";
import { useOutletContext } from "react-router-dom";

const CardEffect = () => {
  const {isDarkMode} = useOutletContext();
  return (
    <div className={`CardEffect-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className={`hearde-effectOfCard ${isDarkMode ? 'dark-mode' : 'light-mode'}`}></div>
      <div className="effect-cards">
        <CardIteml cardItem={{length: 6}}/>
      </div>
    </div>
  );
};

export default CardEffect;
