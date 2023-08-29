"use client";
import React from "react";
import classes from "./index.module.scss";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Blogs = () => {
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
            In this article I tell about new features in react router v6 with an
            example step by step
          </p>
        </div>
        <img src="/image1.jpg" alt="image"></img>
      </div>

      <div className={classes.blog__item}>
        <div>
          <h4>React Redux</h4>
          <p>
            In this article I tell about building a ecommerce website
            functionality with redux and explore new features of redux and redux
            toolkit
          </p>
        </div>
        <img src="/b2.webp" alt="image"></img>
      </div>

      <a href="https://virgool.io/@m_21642669">More Items &raquo;</a>
    </AnimationOnScroll>
  );
};

export default Blogs;
