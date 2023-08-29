"use client";
import React from 'react'
import classes from "./index.module.scss";

const PersonalInfo = () => {
  return (
    <div className={`tile ${classes.card}`}>
      <img src="/farshid.jpg" alt="farshid"></img>

      <div className={classes.info}>
        <div className={classes.firstinfo}>
          <h1>Farshid Karimi</h1>
          <p className={classes.role}>Fullstack developer</p>
        </div>

        <p className={classes.email}>farshidk49@gmail.com</p>

        <p className={classes.about}>
          In my work path from the world of embedded
          systems to web programming, the most important principle that I
          cultivated in myself is persistence and continuous learning and
          practice, which I think I know how to do well.
        </p>
      </div>
    </div>
  )
}

export default PersonalInfo