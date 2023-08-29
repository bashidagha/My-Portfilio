"use client";
import React, { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import classes from "./index.module.scss";
import { myprojects } from "@/data/myprojects.js";

const Projects = () => {
  const pagesArray = Array.from(Array(Math.ceil(myprojects.length / 3)).keys());

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <AnimationOnScroll
      animateIn="animate__fadeInRightBig"
      animateOnce={true}
      animatePreScroll={false}
      className={classes.projects}
    >
      <div className={classes.projects__container}>
        {myprojects
          .slice((currentPage - 1) * 3, currentPage * 3)
          .map((project) => {
            return (
              <div className={`tile ${classes.project__item}`} key={project.id}>
                <div>
                  <img src={project.photo} alt={project.title}></img>

                  <p className={classes.project__hashs}>{project.hash.map((hash) => `#${hash} `)}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className={classes.project__links}>
                  <a
                    className={!project.demo ? classes.disable : ""}
                    href={project.demo ? project.demo : ""}
                  >
                    Demo
                  </a>
                  <a
                    className={!project.code ? classes.disable : ""}
                    href={project.code ? project.code : ""}
                  >
                    Code
                  </a>
                </div>
              </div>
            );
          })}
      </div>

      <div className={classes.pagination}>
        {/* <div className={classes.page}>{"<"}</div> */}
        {pagesArray.map((page) => (
          <div
            className={`${classes.page} ${
              currentPage === page + 1 ? classes.active : ""
            }`}
            key={page}
            onClick={() => setCurrentPage(page + 1)}
          >
            {page + 1}
          </div>
        ))}
        {/* <div className={classes.page}>{">"}</div> */}
      </div>
    </AnimationOnScroll>
  );
};

export default Projects;
