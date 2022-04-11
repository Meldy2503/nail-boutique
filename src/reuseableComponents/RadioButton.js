import React from "react";
import styled from "styled-components";
import { GoCheck } from "react-icons/go";

const RadioButtonContainer = styled.div`
  input {
    display: none;
  }

  label {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: ${({ flexDirection }) => flexDirection || "row-reverse"};
    align-items: center;

    .go {
      color: ${({ theme }) => theme.colors.tertiary2};
      position: absolute;
      top: 0;
      left: 0;
      z-index: 5;
      opacity: 0;
    }
  }

  span {
    width: ${({ width }) => width || "1.65rem"};
    height: ${({ height }) => height || "1.65rem"};
    border: 1px solid #696969;
    border-radius: 0.5rem;
    display: block;
    position: relative;
    cursor: pointer;
    z-index: 2;
    margin-right: 0.6rem;

    &::after {
      content: "";
      width: ${({ width }) => width || "1.65rem"};
      height: ${({ height }) => height || "1.65rem"};
      border-radius: 0.5rem;
      border: 1px solid ${({ theme }) => theme.colors.tertiary1};
      position: absolute;
      top: 50.5%;
      left: 49.5%;
      transform: translate(-50%, -50%);
      z-index: 1;
      background-color: #271602;
      opacity: 0;
      transition: opacity 0.2s;
    }

    &::before {
      content: "";
      position: absolute;
      top: 48%;
      left: 50%;
      width: ${({ checkWidth }) => checkWidth || "0.5rem"};
      height: ${({ checkHeight }) => checkHeight || "1.1rem"};
      border: solid ${({ theme }) => theme.colors.tertiary1};
      border-width: 0 2px 2px 0;
      transform: translate(-50%, -50%) rotate(45deg);
      opacity: 0;
      z-index: 3;
    }
  }

  input:checked ~ span::before {
    opacity: 1;
  }
  input:checked ~ span::after {
    opacity: 1;
  }
`;

function RadioButton({
  label,
  name,
  value,
  onChange,
  width,
  height,
  checkWidth,
  checkHeight,
  flexDirection,
}) {
  return (
    <RadioButtonContainer
      height={height}
      width={width}
      checkWidth={checkWidth}
      checkHeight={checkHeight}
      flexDirection={flexDirection}
    >
      <label>
        <input type="radio" name={name} value={value} onChange={onChange} />
        {label}

        <span>
          <GoCheck className="go" />
        </span>
      </label>
    </RadioButtonContainer>
  );
}

export default RadioButton;
