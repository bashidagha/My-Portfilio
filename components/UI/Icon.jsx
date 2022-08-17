import React from "react";

const Icon = (props) => {
  switch (props.name) {
    case "menu":
      return (
        <i className="bi bi-list"></i>
      );

    default:
      return <></>;
  }
};

export default Icon;
