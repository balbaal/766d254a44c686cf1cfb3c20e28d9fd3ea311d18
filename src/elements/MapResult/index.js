import React, { memo } from "react";
import { RoomRounded } from "@material-ui/icons";

// style
import "./style.sass";

const MapResult = memo(() => {
  return (
    <div className="map-result">
      {[2, 3, 5].map((map, i) => {
        return (
          <div key={i} className="map-result__item">
            <RoomRounded className="map-result__item__icon" />
            <div className="map-result__item__text">
              <h1>Kulina</h1>
              <h2>
                Jalan Tuloding Atas 28, Senayan, Kebayoran Baru, RT.9/RW.4,
                Ariobimo
              </h2>
            </div>
          </div>
        );
      })}
      <div className="map-result__powered">
        <h1>powered by</h1>
        <img src="/images/google.png" alt="google" />
      </div>
    </div>
  );
});

export default MapResult;
