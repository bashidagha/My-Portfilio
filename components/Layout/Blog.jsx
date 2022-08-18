import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import classes from "./blog.module.css";

const Blog = () => {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInRightBig"
      animateOnce={true}
      animatePreScroll={false}
      className={`tile ${classes.blog}`}
    >
      <p>Blog</p>
      <div className={classes.blog__item}>
      
        <div>
          
          <h4>React Router v6</h4>
          <p>
            In this article I tell the story about Proin eu justo sit amet lacus
            bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi. Donec
            aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
            feugiat malesuada molestie.
          </p>
        </div>
        <img src="/image1.jpg" alt="image"></img>
      </div>

      <div className={classes.blog__item}>
      
        <div>
          
          <h4>React Redux</h4>
          <p>
            In this article I tell the story about Proin eu justo sit amet lacus
            bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi. Donec
            aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
            feugiat malesuada molestie.
          </p>
        </div>
        <img src="/b2.webp" alt="image"></img>
      </div>

      <a href="https://virgool.io/@m_21642669">More Items &raquo;</a>

    </AnimationOnScroll>
  );
};

export default Blog;
