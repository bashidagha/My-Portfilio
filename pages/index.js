import React from "react";
import PersonalInfo from "../components/Layout/PersonalInfo";
import Card from "../components/UI/Card";
import "bootstrap-icons/font/bootstrap-icons.css";
import Skills from "../components/Layout/Skills";
import Hobbies from "../components/Layout/Hobbies";
import Blog from "../components/Layout/Blog";
import Exprience from "../components/Layout/Exprience";
import ProjectsHeader from "../components/Layout/ProjectsHeader";
import Projects from "../components/Layout/Projects";

const Home = () => {
  return (
    <Card>
      <PersonalInfo />

      <div className="contents">
        <div className="side1">
          <Skills type="1"/>
          <Skills type="2"/>
          <Skills type="3"/>
          
        </div>

        <div className="side2">
          <Blog />

          <Exprience />
        </div>
      </div>

      <Hobbies />

      <ProjectsHeader />
      <Projects />
    </Card>
  );
};

export default Home;
