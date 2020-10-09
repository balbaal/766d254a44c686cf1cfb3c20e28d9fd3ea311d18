import React from "react";

// Components
import { CtaBack, DatePicker } from "elements";
import { NavButton, TimeLine } from "parts";

// Utils
import { getDaysInMonth } from "utils";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div
          className="shadow shadow-sm"
          style={{ margin: "0 -15px 32px", padding: "8px 15px" }}
        >
          <CtaBack />
          <DatePicker
            listOfDate={getDaysInMonth(
              new Date().getMonth(),
              new Date().getFullYear()
            )}
          />

          <NavButton />
        </div>
        <TimeLine />
      </div>
    );
  }
}

export default Home;
