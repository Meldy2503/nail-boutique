import React from "react";
import { GoCheck } from "react-icons/go";
import Checkbox from "react-custom-checkbox";
import styled from "styled-components";

const CheckboxContainer = styled.div`
  .checkbox label {
    background-color: red;
  }
`;
function CheckBox({ label, name, value, checkbox }) {
  return (
    <CheckboxContainer>
      <Checkbox
        icon={
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#271602",
              alignSelf: "center",
              borderRadius: ".4rem",
              height: "110%",
              width: "110%",
              border: " 1px solid #B57224",
            }}
          >
            <GoCheck color="#B57224" size={15} />
          </div>
        }
        name={name}
        className={checkbox}
        value={value}
        checked={false}
        onChange={(value) => {
          console.log(value);
        }}
        borderColor="#696969"
        borderWidth={1}
        style={{ cursor: "pointer" }}
        labelStyle={{
          marginLeft: 5,
          userSelect: "none",
        }}
        label={label}
      />
    </CheckboxContainer>
  );
}

export default CheckBox;
