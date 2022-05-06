import React, { useState } from "react";
import style from "./PlayerDetails.module.css";
import { useNavigate } from "react-router-dom";

function PlayerDetails() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [firstNameErr, setFirstNameErr] = useState({});
  const [secondNameErr, setSecondNameErr] = useState({});
  const navigate = useNavigate();

  const mystyle = {
    color: "red",
    marginLeft: "45px",
    marginTop: "15px",
  };

  const mystyle_1 = {
    color: "red",
    marginLeft: "45px",
    marginTop: "15px",
  };
  const Go = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid === true) {
      navigate("/game", {
        state: { firstName: firstName, secondName: secondName },
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
  };

  const formValidation = () => {
    const firstNameErr = {};
    const secondNameErr = {};
    let isValid = true;

    if (firstName.trim().length < 1) {
      firstNameErr.firstNameShort = "Please Enter the name of Player 1";
      isValid = false;
    }

    if (secondName.trim().length < 1) {
      secondNameErr.secondNameShort = "Please Enter the name of Player 2";
      isValid = false;
    }
    setFirstNameErr(firstNameErr);
    setSecondNameErr(secondNameErr);
    return isValid;
  };
  return (
    <div className={style.form} onSubmit={onSubmit}>
      <img
        className={style.speaker}
        src={process.env.PUBLIC_URL + "/images/advertising 1.svg"}
      />
      <img
        className={style.vector}
        onClick={() => navigate("/")}
        src={process.env.PUBLIC_URL + "/images/vector.svg"}
      />
      <h1 className={style.heading}>Player Details</h1>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className={style.textline}
        placeholder="Name"
      />
      <span className={style.ply1}>Player 1</span>
      {Object.keys(firstNameErr).map((key) => {
        return <div style={mystyle}>{firstNameErr[key]}</div>;
      })}
      <span className={style.ply2}>Player 2</span>
      <input
        type="text"
        value={secondName}
        onChange={(e) => setSecondName(e.target.value)}
        className={style.txtline}
        placeholder="Name"
      />
      {Object.keys(secondNameErr).map((key) => {
        return <div style={mystyle_1}>{secondNameErr[key]}</div>;
      })}
      <button className={style.btngo} onClick={Go}>
        Go
      </button>
    </div>
  );
}

export default PlayerDetails;
