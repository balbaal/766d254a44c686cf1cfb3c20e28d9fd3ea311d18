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
        <CtaBack />
        <DatePicker
          listOfDate={getDaysInMonth(
            new Date().getMonth(),
            new Date().getFullYear()
          )}
        />

        <NavButton />
        <TimeLine />
      </div>
    );
  }
}

export default Home;
