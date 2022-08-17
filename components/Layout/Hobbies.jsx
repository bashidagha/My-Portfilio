import React from "react";
import classes from "./hobbies.module.css";

const Hobbies = () => {
  return (
    <div className={`tile ${classes.hobbies}`}>
      <h3>Hobbies</h3>

      <img src="/image1.jpg" alt="image"></img>

      <h4>Gaming</h4>
      <p>Quisque feugiat malesuada molestie.</p>

      <img src="/image1.jpg" alt="image"></img>

      <h4>Gaming</h4>
      <p>Quisque feugiat malesuada molestie.</p>

      <img src="/image1.jpg" alt="image"></img>

      <h4>Gaming</h4>
      <p>Quisque feugiat malesuada molestie.</p>
    </div>
  );
};

export default Hobbies;
