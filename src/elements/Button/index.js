import React, { memo } from "react";

const Button = memo(({ style, title, className, onClick }) => {
  return (
    <button
      style={{ style }}
      onClick={onClick}
      className={["btn btn-md", className].join(" ")}
    >
      {title}
    </button>
  );
});

export default Button;
