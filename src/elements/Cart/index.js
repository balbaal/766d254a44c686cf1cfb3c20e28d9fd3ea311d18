import React, { memo } from "react";
import { ShoppingCartOutlined, NavigateNextRounded } from "@material-ui/icons";

// style
import "./style.sass";

const Cart = memo(({ onClick }) => {
  return (
    <div onClick={onClick} className="cart-add container">
      <div className="cart-add__content">
        <div className="cart-add__content__text">
          <h3 className="cart-add__content__text__item-price">
            5 Items | Rp 125,000
          </h3>
          <h4 className="cart-add__content__text__include-ongkir">
            Termasuk ongkos kirim
          </h4>
        </div>
        <div>
          <ShoppingCartOutlined /> <NavigateNextRounded />
        </div>
      </div>
    </div>
  );
});

export default Cart;
