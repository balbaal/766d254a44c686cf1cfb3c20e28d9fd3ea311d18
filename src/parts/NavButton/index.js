import React, { useState } from "react";

// Component
import { Button } from "elements";

// Style
import "./style.sass";

const NavButton = () => {
  const [activeNav, setActiveNav] = useState("lunch");

  return (
    <div className="nav-button">
      <Button
        title="Lunch"
        className={`btn-${activeNav === "lunch" ? "secondary" : "light"}`}
        onClick={() => setActiveNav("lunch")}
      />
      <Button
        title="Dinner"
        className={`btn-${activeNav === "dinner" ? "secondary" : "light"}`}
        onClick={() => setActiveNav("dinner")}
      />
    </div>
  );
};

export default NavButton;
