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
      <div className={classes.blog__top}>
        <div>
          <p>Blog</p>
          <h4>How to organize your CSS</h4>
        </div>
        <img src="/image1.jpg" alt="image"></img>
      </div>

      <p>
        In this article I tell the story about Proin eu justo sit amet lacus
        bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi. Donec
        aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat
        malesuada molestie.
      </p>

      <a href="https://virgool.io">virgool.io</a>
    </AnimationOnScroll>
  );
};

export default Blog;
