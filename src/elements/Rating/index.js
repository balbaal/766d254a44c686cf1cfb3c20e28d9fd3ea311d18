import React from "react";
import { StarRounded, StarHalfRounded, StarOutlined } from "@material-ui/icons";

// style
import "./style.sass";

const Rating = () => {
  return (
    <div className="rating">
      <h3 className="rating__value">4.5</h3>
      <div className="rating__star">
        <StarRounded />
        <StarRounded />
        <StarRounded />
        <StarRounded />
        <StarHalfRounded />
      </div>
    </div>
  );
};

export default Rating;
