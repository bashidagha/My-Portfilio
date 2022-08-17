import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import classes from "./exprience.module.css";

const Exprience = () => {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInRightBig"
      animateOnce={true}
      animatePreScroll={false}
      className={`tile ${classes.exprience}`}
    >
      <h4>Experiences</h4>

      <div className={classes["exprience-item"]}>
        <img src="pantherx.png" alt="pantherx"></img>

        <div>
          <p>Feb 2017 - Current</p>
          <h5>Front-end developer</h5>
          <p>
            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
            feugiat malesuada molestie.
          </p>
        </div>
      </div>

      <div className={classes["exprience-item"]}>
        <img src="bug.jpg" alt="bug"></img>

        <div>
          <p>Aug 2016 - Feb 2018</p>
          <h5>Full-stack developer</h5>
          <p>
            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
            feugiat malesuada molestie.
          </p>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default Exprience;
