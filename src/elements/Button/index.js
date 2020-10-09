import React from "react";

const Button = ({ style, title, className, onClick }) => {
  return (
    <button
      style={{ style }}
      onClick={onClick}
      className={["btn btn-md", className].join(" ")}
    >
      {title}
    </button>
  );
};

export default Button;
