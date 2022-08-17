import React from "react";
import PersonalInfo from "../components/Layout/PersonalInfo";
import Card from "../components/UI/Card";
import "bootstrap-icons/font/bootstrap-icons.css";
import Skills from "../components/Layout/Skills";
import Hobbies from "../components/Layout/Hobbies";
import Blog from "../components/Layout/Blog";
import Exprience from "../components/Layout/Exprience";

const Home = () => {
  return (
    <Card>
      <PersonalInfo />
        <div className="contents">
          <Skills />

          <Blog />
          <Hobbies />
          <Exprience />
        </div>
    </Card>
  );
};

export default Home;
