import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import classes from "./skills.module.css";

const Skills = () => {
  return (
    <AnimationOnScroll
      animateIn="animate__tada"
      animateOnce={true}
      initiallyVisible={true}
      className={`tile ${classes.skills}`}
    >
      <h4>Front end</h4>

      <div className={`${classes["skill-item"]}`}>
        <p>React / Redux</p>
        <div className={`${classes.progress}`}>
          <div />
        </div>
      </div>

      <div className={`${classes["skill-item"]}`}>
        <p>React Router/ hooks</p>
        <div className={`${classes.progress}`}>
          <div />
        </div>
      </div>

      <div className={`${classes["skill-item"]}`}>
        <p>HTML / CSS / JS</p>
        <div className={`${classes.progress}`}>
          <div />
        </div>
      </div>

      <div className={`${classes["skill-item"]}`}>
        <p>Responsive Design</p>
        <div className={`${classes.progress}`}>
          <div />
        </div>
      </div>

      <div className={`${classes["skill-item"]}`}>
        <p>Nextjs</p>
        <div className={`${classes.progress}`}>
          <div />
        </div>
      </div>

      <div className={`${classes["skill-item"]}`}>
        <p>Sass</p>
        <div className={`${classes.progress}`}>
          <div />
        </div>
      </div>

      <div className={`${classes["skill-item"]}`}>
        <p>Bootstrap</p>
        <div className={`${classes.progress}`}>
          <div />
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default Skills;
