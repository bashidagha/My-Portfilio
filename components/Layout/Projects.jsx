import React, { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import classes from "./projects.module.css";

const myprojects = [
  {
    hash: ["HTML", "CSS", "Responsive"],
    title: "Recipe Blog1",
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    demo: "https://bashidagha.github.io/recipe-page-master/",
    code: "https://github.com/bashidagha/recipe-page-master",
    photo: "p1.webp",
  },
  {
    hash: ["HTML", "CSS", "Responsive"],
    title: "Recipe Blog2",
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    demo: "https://bashidagha.github.io/recipe-page-master/",
    code: "https://github.com/bashidagha/recipe-page-master",
    photo: "p1.webp",
  },
  {
    hash: ["HTML", "CSS", "Responsive"],
    title: "Recipe Blog3",
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    demo: "https://bashidagha.github.io/recipe-page-master/",
    code: "https://github.com/bashidagha/recipe-page-master",
    photo: "p1.webp",
  },
  {
    hash: ["HTML", "CSS", "Responsive"],
    title: "Recipe Blog4",
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    demo: "https://bashidagha.github.io/recipe-page-master/",
    code: "https://github.com/bashidagha/recipe-page-master",
    photo: "p1.webp",
  },
  {
    hash: ["HTML", "CSS", "Responsive"],
    title: "Recipe Blog5",
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    demo: "https://bashidagha.github.io/recipe-page-master/",
    code: "https://github.com/bashidagha/recipe-page-master",
    photo: "p1.webp",
  },
  {
    hash: ["HTML", "CSS", "Responsive"],
    title: "Recipe Blog6",
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    demo: "https://bashidagha.github.io/recipe-page-master/",
    code: "https://github.com/bashidagha/recipe-page-master",
    photo: "p1.webp",
  },
  {
    hash: ["HTML", "CSS", "Responsive"],
    title: "Recipe Blog7",
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    demo: "https://bashidagha.github.io/recipe-page-master/",
    code: "https://github.com/bashidagha/recipe-page-master",
    photo: "p1.webp",
  },
  {
    hash: ["HTML", "CSS", "Responsive"],
    title: "Recipe Blog8",
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    demo: "https://bashidagha.github.io/recipe-page-master/",
    code: "https://github.com/bashidagha/recipe-page-master",
    photo: "p1.webp",
  },
  {
    hash: ["HTML", "CSS", "Responsive"],
    title: "Recipe Blog9",
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    demo: "https://bashidagha.github.io/recipe-page-master/",
    code: "https://github.com/bashidagha/recipe-page-master",
    photo: "p1.webp",
  },
];

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
              <div className={`tile ${classes.project__item}`}>
                <img src={project.photo} alt={project.title}></img>
                {project.hash.map((hash) => (
                  <span>#{hash}&nbsp;&nbsp;</span>
                ))}
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className={classes.project__links}>
                  <a>Demo</a>
                  <a>Code</a>
                </div>

              </div>
            );
          })}
      </div>

      <div className={classes.pagination}>
        <div className={classes.page}>{"<"}</div>
        {pagesArray.map((page) => (
          <div
            className={classes.page}
            key={page}
            onClick={() => setCurrentPage(page + 1)}
          >
            {page + 1}
          </div>
        ))}
        <div className={classes.page}>{">"}</div>
      </div>
    </AnimationOnScroll>
  );
};

export default Projects;
