import React from "react";
import Combotext from "./Combotext";
import cafe from "../Combo/img/cafe.jpg";
import "./Combo.css";

const comboTitle = "Sorprende a tus amigos";
const subTitle = "preparando café de especialidad en tu hogar!";

const Combo = () => {
  return (
    <>
      <article className="combo">
        <img src={cafe} alt="combo-img" className="combo-imagen" />
        <div className="texto">
          <h3>{comboTitle}</h3>
          <h4>{subTitle}</h4>
          <Combotext />
        </div>
      </article> 
    </>
  );
};
export default Combo;
