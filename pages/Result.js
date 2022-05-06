import React, { useState } from 'react'
import style from "./Result.module.css";
import { useNavigate, useLocation } from "react-router-dom";

function Result() {
  //useLocation hook returns a location object
  const location = useLocation();
  console.log(location.state);
  //storing result 
  const result = location.state;
  console.log(result);

  //using navigate to redirect the page and setting path
  const navigate = useNavigate();
  return (
    <div className={style.form}>
      <img
        className={style.speaker}
        src={process.env.PUBLIC_URL + "/images/advertising 1.svg"}
      />
      <div className={style.form1}>
        <img
          className={style.win}
          src={process.env.PUBLIC_URL + "/images/win1.svg"}
        />
      </div>
      {/* map is used to map the level and winnners */}
      {result.map((res) => (
        <>
          {" "}
          <div className={style.rectangle}>
            <span className={style.level}>Level&nbsp;{res.level}</span>
            <span className={style.player}>{res.winner}</span>{" "}
          </div>
        </>
      ))}

      <button className={style.playbtn} onClick={() => navigate("/")}>
        Play again
      </button>
    </div>
  );
}

export default Result
