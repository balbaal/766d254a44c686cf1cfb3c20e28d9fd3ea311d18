import React, { useState, memo, useCallback } from "react";

// Component
import { Button } from "elements";

// Style
import "./style.sass";

const NavButton = memo(() => {
  const [activeNav, setActiveNav] = useState("lunch");

  const __handleSetDinner = useCallback(() => {
    setActiveNav("dinner");
  }, []);

  const __handleSetLunch = useCallback(() => {
    setActiveNav("lunch");
  }, []);

  return (
    <div className="nav-button">
      <Button
        title="Lunch"
        className={`btn-${activeNav === "lunch" ? "secondary" : "light"}`}
        onClick={__handleSetLunch}
      />
      <Button
        title="Dinner"
        className={`btn-${activeNav === "dinner" ? "secondary" : "light"}`}
        onClick={__handleSetDinner}
      />
    </div>
  );
});

export default NavButton;
