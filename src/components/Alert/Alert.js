import React from "react";
import { AlertStyle } from "./AlertStyle";
import { FaCheckCircle } from "react-icons/fa";

const Alert = (props) => {
  return (
    props.showAlert && (
      <AlertStyle>
        {/* <span> */}
        <p>
          <FaCheckCircle size={28} />
          {props.showAlert.msg}
        </p>
        {/* </span> */}
      </AlertStyle>
    )
  );
};

export default Alert;
