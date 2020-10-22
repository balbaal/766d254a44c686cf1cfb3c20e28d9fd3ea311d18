import React, { memo } from "react";
import { CloseRounded } from "@material-ui/icons";

// style
import "./style.sass";

const Modal = memo(({ children, onClick, title }) => {
  return (
    <div className="modal-search container">
      <div className="modal-search__content container">
        <div className="modal-search__content__close-btn">
          <CloseRounded onClick={onClick} />
        </div>
        <div className="modal-search__content__main">
          <h1 className="modal-search__content__main__title">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
});

export default Modal;
