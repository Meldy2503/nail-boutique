import React from "react";
import {
  ButtonWrapper,
  Date,
  HeaderWrapper,
  Monitor,
  StyledGreen,
  StyledRed,
  TextWrapper,
  TitleWrapper,
} from "./calenderHeaderStyle";
import Green from "../../../../images/Green.svg";
import Red from "../../../../images/Red.svg";

const CalenderHeader = () => {
  return (
    <HeaderWrapper>
      <Monitor>
        <Date>
          <ButtonWrapper>&lt;</ButtonWrapper>
          <ButtonWrapper>
            <TitleWrapper>March</TitleWrapper>
            <TextWrapper>2022</TextWrapper>
          </ButtonWrapper>
          <ButtonWrapper>&gt;</ButtonWrapper>
        </Date>
        <StyledGreen>
          <img src={Green} alt="indicator" />
          <h4>Available</h4>
        </StyledGreen>
        <StyledRed>
          <img src={Red} alt="indicator" />
          <h4>unvailable</h4>
        </StyledRed>
      </Monitor>
    </HeaderWrapper>
  );
};

export default CalenderHeader;
