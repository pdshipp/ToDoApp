import React from "react";

const Rainbow = (WrappedComponent) => {
  const colours = ["teal", "blue", "blue-grey"];
  const randomColour = colours[Math.floor(Math.random() * colours.length)];
  const textColor = randomColour + "-text";

  return (props) => {
    return (
      <div className={textColor}>
        <WrappedComponent />
      </div>
    );
  };
};

export default Rainbow;
