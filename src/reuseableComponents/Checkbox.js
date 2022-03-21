import React from "react";
import { GoCheck } from "react-icons/go";
import Checkbox from "react-custom-checkbox";
import styled from "styled-components";

const CheckboxStyle = styled.div`
  .checkbox {
    display: flex;
    align-items: center;
    /* margin: 2rem 0; */
    font-size: 1.4rem;

    input {
      margin-right: 1rem;
      border: 0.5px solid ${({ theme }) => theme.colors.tertiary2};
      accent-color: ${({ theme }) => theme.colors.tertiary2};
      background-color: #000;
    }
  }
`;
function Check({ label, name }) {
  return (
    <CheckboxStyle>
      <Checkbox
        icon={
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#271602",
              alignSelf: "center",
              borderRadius: "4px",
              height: "110%",
              width: "110%",
              border: " 1px solid #B57224",
            }}
          >
            <GoCheck color="#B57224" size={15} />
          </div>
        }
        name={name}
        className="checkbox"
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
    </CheckboxStyle>
  );
}

export default Check;
