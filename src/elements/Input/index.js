import React from "react";

// style
import "./style.sass";

const Input = ({ className, type, onChange, value, icon }) => {
  return (
    <div className="input">
      {icon}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={["", className].join(" ")}
      />
    </div>
  );
};

export default Input;
