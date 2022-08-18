import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import classes from "./projects.module.css";

const ProjectsHeader = () => {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInRightBig"
      animateOnce={true}
      animatePreScroll={false}
      className={`tile ${classes.projects__header}`}
    >

        <p>Projects (7)</p>

        <div className={classes.header__item}>
            <a>React</a>
            <a>Nextjs</a>
            <a>Typescript</a>
            <a>REST‌ API</a>
            <a>Wordpress</a>
        </div>
        
    </AnimationOnScroll>
  )
}

export default ProjectsHeader