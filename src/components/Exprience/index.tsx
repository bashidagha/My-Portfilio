"use client";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import classes from "./index.module.scss";

const Exprience = () => {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInRightBig"
      animateOnce={true}
      animatePreScroll={false}
      className={`tile ${classes.exprience}`}
    >
      <h4>Experiences</h4>

      <table className={classes["exprience-item"]}>
        <tbody>
          <tr>
            <td>
              <img src="pantherx.png" alt="pantherx"></img>
            </td>
            <td>
              <p>February 2021 - January 2021</p>
              <h5>Back-end developer</h5>
              <p>
                Program c++ plugin for Guix OS, Design patterns, Protobuf,
                Gitlab, User and Kernel space linux
              </p>
            </td>
          </tr>

          <tr>
            <td>
              <img src="bug.jpg" alt="bug"></img>
            </td>
            <td>
              <p>March 2022 - July 2022</p>
              <h5>Frontend developer</h5>
              <p>
                Intership frontend developer worked with XAdobe, Docker,
                Bootstrap, React, Nextjs
              </p>
            </td>
          </tr>

          <tr>
            <td>
              <img src="sina.jpg" alt="sina"></img>
            </td>
            <td>
              <p>January 2023 - August 2023</p>
              <h5>React developer</h5>
              <p>React and Redux Toolkit</p>
            </td>
          </tr>

          <tr>
            <td>
              <img src="damavand.jpg" alt="damavand"></img>
            </td>
            <td>
              <p>September 2022 - Now</p>
              <h5>Fullstack developer</h5>
              <p>React and Fastapi and Django</p>
            </td>
          </tr>
        </tbody>
      </table>
    </AnimationOnScroll>
  );
};

export default Exprience;
