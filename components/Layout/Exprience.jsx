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
    </AnimationOnScroll>
  );
};

export default Exprience;
