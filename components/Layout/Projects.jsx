import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import classes from "./projects.module.css";

const Projects = () => {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInRightBig"
      animateOnce={true}
      animatePreScroll={false}
      className={classes.projects}
    >
      <div className="tile"></div>

      <div className="tile"></div>

      <div className="tile"></div>
    </AnimationOnScroll>
  );
};

export default Projects;
