"use client";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import classes from "./index.module.scss";

const Skills = (props) => {
  const ComponentA = () => {
    return (
      <>
        <h4>Front end</h4>

        <div className={`${classes["skill-item"]}`}>
          <p>React / Redux</p>
          <div className={`${classes.progress}`}>
            <div />
          </div>
        </div>

        <div className={`${classes["skill-item"]}`}>
          <p>HTML-CSS-JS / TS / Sass</p>
          <div className={`${classes.progress}`}>
            <div />
          </div>
        </div>

        <div className={`${classes["skill-item"]}`}>
          <p>React Native</p>
          <div className={`${classes.progress}`}>
            <div />
          </div>
        </div>

        <div className={`${classes["skill-item"]}`}>
          <p>Bootstrap / Mui</p>
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
          <p>GatsbyJs</p>
          <div className={`${classes.progress}`}>
            <div />
          </div>
        </div>
      </>
    );
  };

  const ComponentB = () => {
    return (
      <>
        <h4>Back end</h4>

        <div className={`${classes["skill-item"]}`}>
          <p>Fastapi</p>
          <div className={`${classes.progress}`}>
            <div />
          </div>
        </div>

        <div className={`${classes["skill-item"]}`}>
          <p>Django</p>
          <div className={`${classes.progress}`}>
            <div />
          </div>
        </div>

        <div className={`${classes["skill-item"]}`}>
          <p>Nodejs</p>
          <div className={`${classes.progress}`}>
            <div />
          </div>
        </div>
      </>
    );
  };

  const ComponentC = () => {
    return (
      <>
        <h4>Other Skills</h4>

        <div className={`${classes["skill-item"]}`}>
          <p>LPIC </p>
          <div className={`${classes.progress}`}>
            <div />
          </div>
        </div>

        <div className={`${classes["skill-item"]}`}>
          <p>REST‌ API / Docker / Git</p>
          <div className={`${classes.progress}`}>
            <div />
          </div>
        </div>

        <div className={`${classes["skill-item"]}`}>
          <p>Wordpress / Seo</p>
          <div className={`${classes.progress}`}>
            <div />
          </div>
        </div>

        <div className={`${classes["skill-item"]}`}>
          <p>C / C++</p>
          <div className={`${classes.progress}`}>
            <div />
          </div>
        </div>

        <div className={`${classes["skill-item"]}`}>
          <p>Embedded Systems</p>
          <div className={`${classes.progress}`}>
            <div />
          </div>
        </div>

        <div className={`${classes["skill-item"]}`}>
          <p>Java / Android</p>
          <div className={`${classes.progress}`}>
            <div />
          </div>
        </div>
      </>
    );
  };

  return (
    <AnimationOnScroll
      animateIn="animate__tada"
      animateOnce={true}
      initiallyVisible={true}
      className={`tile ${classes.skills}`}
    >
      {props.type === "1" && <ComponentA />}
      {props.type === "2" && (
        <div className={`${classes["backend__skills"]}`}>
          <ComponentB />
        </div>
      )}
      {props.type === "3" && (
        <div className={`${classes["other__skills"]}`}>
          <ComponentC />
        </div>
      )}
    </AnimationOnScroll>
  );
};

export default Skills;
