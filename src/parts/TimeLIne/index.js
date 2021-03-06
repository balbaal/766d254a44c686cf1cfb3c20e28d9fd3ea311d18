import React, { memo } from "react";

// Component
import { CardFood } from "elements";

// Style
import "./style.sass";

const TimeLine = memo(({ onClick }) => {
  return (
    <div className="time-line-foods">
      <h1 className="time-line-foods__date">Kamis, 13 Maret 2019</h1>
      <div className="time-line-foods__grid-template">
        {[1, 3, 5, 5, 6].map((item, i) => (
          <CardFood key={i} onClick={onClick} />
        ))}
      </div>
    </div>
  );
});

export default TimeLine;
