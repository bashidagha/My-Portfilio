import React from "react";
import PersonalInfo from "../components/Layout/PersonalInfo";
import Card from "../components/UI/Card";
import "bootstrap-icons/font/bootstrap-icons.css";
import Skills from "../components/Layout/Skills";

const Home = () => {
  return (
    <Card>
      <PersonalInfo />
      <Skills/>


    </Card>
  );
};

export default Home;
