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
          <p>February 2021 - January 2021</p>
          <h5>Back-end developer</h5>
          <p>
            Program c++ plugin for Guix OS, Design patterns, Protobuf, Gitlab,
            User and Kernel space linux
          </p>
        </div>
      </div>

      <div className={classes["exprience-item"]}>
        <img src="bug.jpg" alt="bug"></img>

        <div>
          <p>March 2022 - July 2022</p>
          <h5>Frontend developer</h5>
          <p>
            Intership frontend developer worked with XAdobe, Docker, Bootstrap,
            React, Nextjs
          </p>
        </div>
      </div>

      
    </AnimationOnScroll>
  );
};

export default Exprience;
