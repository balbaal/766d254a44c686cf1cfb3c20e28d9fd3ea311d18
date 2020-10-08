import React from "react";

// Style
import "./style.sass";

// Utils
import { getDaysName } from "utils";

const DatePicker = ({ listOfDate }) => {
  return (
    <div className="date-picker">
      {listOfDate.map((date, i) => {
        return (
          <div className="date-picker__content">
            <div
              className={`date-picker__content__wrap ${
                date.getDate() === new Date().getDate() &&
                "date-picker__content__wrap--selected"
              }`}
            >
              <h5
                className={`date-picker__content__wrap__day ${
                  getDaysName(date.getDay()) === "SAB" ||
                  getDaysName(date.getDay()) === "MIN"
                    ? "date-picker__content__wrap__day--disabled"
                    : ""
                }`}
              >
                {getDaysName(date.getDay())}
              </h5>
              <h4
                className={`date-picker__content__wrap__date ${
                  getDaysName(date.getDay()) === "SAB" ||
                  getDaysName(date.getDay()) === "MIN"
                    ? "date-picker__content__wrap__date--disabled"
                    : ""
                }`}
              >
                {i + 1}
              </h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DatePicker;
