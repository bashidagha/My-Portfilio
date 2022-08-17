import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import classes from "./hobbies.module.css";

const Hobbies = () => {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInLeftBig"
      animateOnce={true}
      animatePreScroll={false}
      className={`tile ${classes.hobbies}`}
    >
      <h3>Hobbies</h3>

      <img src="/image1.jpg" alt="image"></img>

      <h4>Gaming</h4>
      <p>Quisque feugiat malesuada molestie.</p>

      <img src="/image1.jpg" alt="image"></img>

      <h4>Gaming</h4>
      <p>Quisque feugiat malesuada molestie.</p>
    </AnimationOnScroll>
  );
};

export default Hobbies;
