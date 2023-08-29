"use client";
import React from 'react'
import { AnimationOnScroll } from "react-animation-on-scroll";
import classes from "./index.module.scss";

const Hobbies = () => {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInLeftBig"
      animateOnce={true}
      animatePreScroll={false}
      className={`tile ${classes.hobbies}`}
    >
      <h3>Hobbies</h3>

      <div className={classes.hobbies__container}>
        <div>
          <img src="/h1.webp" alt="image"></img>

          <h4>Film</h4>
          <p>Action, Drama and fiction</p>
        </div>

        <div>
          <img src="/h2.jpg" alt="image"></img>

          <h4>Football</h4>
          <p>Barcelona, ManCity and Esteghlal :)</p>
        </div>

        <div>
          <img src="/h3.jpeg" alt="image"></img>

          <h4>Book</h4>
          <p>I used to it from childhood</p>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default Hobbies