import React from "react";
import { AlertStyle } from "./AlertStyle";
import { Tick } from "./AlertStyle";

const Alert = ({ showAlert, display }) => {
  return (
    showAlert && (
      <AlertStyle>
        <p>
          <Tick display={display} />
          {showAlert.msg}
        </p>
      </AlertStyle>
    )
  );
};

export default Alert;
