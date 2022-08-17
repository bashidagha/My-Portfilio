import React from "react";
import classes from "./skills.module.css";

const Skills = () => {
  return (
    <div className={`tile ${classes.skills}`}>
      <h4>Front end</h4>

      <div className={`${classes["skill-item"]}`}>
        <p>React</p>
        <div className={`${classes.progress}`}>
          <div />
        </div>
      </div>

      <div className={`${classes["skill-item"]}`}>
        <p>HTML/CSS</p>
        <div className={`${classes.progress}`}>
          <div />
        </div>
      </div>

      <div className={`${classes["skill-item"]}`}>
        <p>Javascript</p>
        <div className={`${classes.progress}`}>
          <div />
        </div>
      </div>

      <div className={`${classes["skill-item"]}`}>
        <p>Redux</p>
        <div className={`${classes.progress}`}>
          <div />
        </div>
      </div>

      <div className={`${classes["skill-item"]}`}>
        <p>React Router</p>
        <div className={`${classes.progress}`}>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Skills;
