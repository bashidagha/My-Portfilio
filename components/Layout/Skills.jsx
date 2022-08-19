import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import classes from "./skills.module.css";

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
          <p>React Router/ hooks</p>
          <div className={`${classes.progress}`}>
            <div />
          </div>
        </div>

        <div className={`${classes["skill-item"]}`}>
          <p>HTML / CSS / JS / TS</p>
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
      </>
    );
  };


  const ComponentB = () => {
    return (
      <>
        <h4>Other Skills</h4>

        <div className={`${classes["skill-item"]}`}>
          <p>Java / Android</p>
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
          <p>Linux </p>
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
          <p>Nodejs (Backend)</p>
          <div className={`${classes.progress}`}>
            <div />
          </div>
        </div>

        <div className={`${classes["skill-item"]}`}>
          <p>Scrum Master</p>
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
      {props.type!=="2" && <ComponentA/>}
      {props.type==="2" && <div className={`${classes["other__skills"]}`}><ComponentB/></div>}
      
    </AnimationOnScroll>
  );
};

export default Skills;
