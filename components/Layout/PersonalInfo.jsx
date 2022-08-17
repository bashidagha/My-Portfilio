import React from "react";
import Icon from "../UI/Icon";
import classes from "./personalinfo.module.css";

const PersonalInfo = () => {
  return (
    <div className={`tile ${classes.card}`}>
      <img src="/farshid.jpg" alt="farshid"></img>

      <div className={classes.info}>
        <div className={classes.firstinfo}>
          <h1>Farshid Karimi</h1>
          <p className={classes.role}>Front-end developer</p>
        </div>

        <p className={classes.email}>farshidk49@gmail.com</p>

        <p className={classes.about}>
          Self-motivated developer, who is willing to learn and create
          outstanding UI applications.
        </p>
      </div>
    </div>
  );
};

export default PersonalInfo;
