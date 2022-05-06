import React from "react";
import style from "./NewGame.module.css";
import { useNavigate } from "react-router-dom";
function NewGame() {
  //using navigate to redirect the page and setting path
  const navigate = useNavigate();

  return (
    <div className={style.form}>
      <img
        className={style.speaker}
        src={process.env.PUBLIC_URL + "/images/advertising 1.svg"}
      />
      <img
        className={style.img1}
        src={process.env.PUBLIC_URL + "/images/crush 1.svg"}
      />
      <button className={style.gamebtn} onClick={() => navigate("/details")}>
        New Game
      </button>
      <button className={style.multibtn}>Multi Payer</button>
      <button className={style.setbtn}>Settings</button>
    </div>
  );
}

export default NewGame;
