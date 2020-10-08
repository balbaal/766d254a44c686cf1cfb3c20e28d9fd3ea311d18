import React from "react";

// Components
import { CtaBack, DatePicker } from "elements";

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
      </div>
    );
  }
}

export default Home;
