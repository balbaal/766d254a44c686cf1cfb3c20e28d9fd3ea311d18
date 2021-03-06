import React, { useCallback } from "react";
import { AddRounded } from "@material-ui/icons";

// Component
import { Button, Rating } from "elements";

// Style
import "./style.sass";

const CardFood = ({ onClick }) => {
  const __handleOnClick = useCallback(() => {
    onClick();
  }, []);
  return (
    <div className="card-food shadow shadow-sm">
      <figure className="card-food__figure">
        <img
          className="card-food__figure__img"
          src="images/food-1.jpg"
          alt="food-image"
        />
      </figure>
      <div className="card-food__content">
        <Rating />
        <h1 className="card-food__content__title">
          Roasted Chicken with Scrambled Egg
        </h1>
        <h2 className="card-food__content__owner">by Kulina - Uptown Lunch</h2>
        <div className="card-food__content__footer">
          <h3 className="card-food__content__footer__price">Rp 35,000</h3>
          <Button
            onClick={__handleOnClick}
            title={
              <>
                ADD <AddRounded />
              </>
            }
            className="btn-primary d-flex card-food__content__footer__btn"
          />
        </div>
      </div>
    </div>
  );
};

export default CardFood;
