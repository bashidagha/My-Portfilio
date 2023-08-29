import React from "react";

const Icon = (props) => {
  switch (props.name) {
    case "envelope":
      return <i className="bi bi-envelope-fill"></i>;

    default:
      return <></>;
  }
};

export default Icon;
