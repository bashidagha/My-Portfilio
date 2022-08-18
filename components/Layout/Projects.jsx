import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import classes from "./projects.module.css";

const myprojects = [
  {
    hash: ["HTML", "CSS", "Responsive"],
    title: "Recipe Blog",
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    demo: "https://bashidagha.github.io/recipe-page-master/",
    code: "https://github.com/bashidagha/recipe-page-master",
    photo: "p1.webp",
  },
  {
    hash: ["HTML", "CSS", "Responsive"],
    title: "Recipe Blog",
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    demo: "https://bashidagha.github.io/recipe-page-master/",
    code: "https://github.com/bashidagha/recipe-page-master",
    photo: "p1.webp",
  },
  {
    hash: ["HTML", "CSS", "Responsive"],
    title: "Recipe Blog",
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    demo: "https://bashidagha.github.io/recipe-page-master/",
    code: "https://github.com/bashidagha/recipe-page-master",
    photo: "p1.webp",
  },
  {
    hash: ["HTML", "CSS", "Responsive"],
    title: "Recipe Blog",
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    demo: "https://bashidagha.github.io/recipe-page-master/",
    code: "https://github.com/bashidagha/recipe-page-master",
    photo: "p1.webp",
  },
  {
    hash: ["HTML", "CSS", "Responsive"],
    title: "Recipe Blog",
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    demo: "https://bashidagha.github.io/recipe-page-master/",
    code: "https://github.com/bashidagha/recipe-page-master",
    photo: "p1.webp",
  },
  {
    hash: ["HTML", "CSS", "Responsive"],
    title: "Recipe Blog",
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    demo: "https://bashidagha.github.io/recipe-page-master/",
    code: "https://github.com/bashidagha/recipe-page-master",
    photo: "p1.webp",
  },
  {
    hash: ["HTML", "CSS", "Responsive"],
    title: "Recipe Blog",
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    demo: "https://bashidagha.github.io/recipe-page-master/",
    code: "https://github.com/bashidagha/recipe-page-master",
    photo: "p1.webp",
  },
  {
    hash: ["HTML", "CSS", "Responsive"],
    title: "Recipe Blog",
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    demo: "https://bashidagha.github.io/recipe-page-master/",
    code: "https://github.com/bashidagha/recipe-page-master",
    photo: "p1.webp",
  },
  {
    hash: ["HTML", "CSS", "Responsive"],
    title: "Recipe Blog",
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    demo: "https://bashidagha.github.io/recipe-page-master/",
    code: "https://github.com/bashidagha/recipe-page-master",
    photo: "p1.webp",
  },
];

const Projects = () => {
  const pagesArray = Array.from(Array(Math.ceil(myprojects.length / 3)).keys());

  return (
    <AnimationOnScroll
      animateIn="animate__fadeInRightBig"
      animateOnce={true}
      animatePreScroll={false}
      className={classes.projects}
    >
      <div className={classes.projects__container}>
        <div className="tile"></div>

        <div className="tile"></div>

        <div className="tile"></div>
      </div>

      <div className={classes.pagination}>
        <div className={classes.page}>{"<"}</div>
        {pagesArray.map((page) => (
          <div className={classes.page} key={page}>
            {page + 1}
          </div>
        ))}
        <div className={classes.page}>{">"}</div>
      </div>
    </AnimationOnScroll>
  );
};

export default Projects;
