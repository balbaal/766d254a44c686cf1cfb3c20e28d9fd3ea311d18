import React from "react";
import { ArrowBackRounded, KeyboardArrowDownRounded } from "@material-ui/icons";

// Style
import "./style.sass";

const CtaBack = ({ onClick }) => {
  return (
    <div className="cta-back">
      <ArrowBackRounded className="cta-back__icon-back" />
      <div className="cta-back__content">
        <h6>Alamat Pengantaran</h6>
        <h5>
          Tokopedia Tower <KeyboardArrowDownRounded onClick={onClick} />
        </h5>
      </div>
    </div>
  );
};

export default CtaBack;
