import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import classes from "./projects.module.css";
import { myprojects } from './myprojects';

const ProjectsHeader = () => {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInRightBig"
      animateOnce={true}
      animatePreScroll={false}
      className={`tile ${classes.projects__header}`}
    >

        <p>Projects ({myprojects.length})</p>

        {/* <div className={classes.header__item}>
            <a>All</a>
            <a>React</a>
            <a>Nextjs</a>
            <a>Typescript</a>
            <a>REST‌ API</a>
            <a>Wordpress</a>
        </div> */}
        
    </AnimationOnScroll>
  )
}

export default ProjectsHeader