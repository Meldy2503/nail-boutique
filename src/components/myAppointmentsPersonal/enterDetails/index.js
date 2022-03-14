import React from "react";
import BookingSummary from "../bookingSummary";
import { Back } from "../../../reuseableComponents/goBack/goBackStyle";
import { Button } from "../../../reuseableComponents/buttonStyle";
import {
  ContentContainer,
  RightContent,
  RightContentCol1,
  RightContentCol2,
} from "../../../reuseableComponents/containerStyle";
import Sidebar from "../../sidebar";
import { HeadingStyle } from "../../../reuseableComponents/headingStyle";
import { MdChevronLeft } from "react-icons/md";

function EnterDetails() {
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <RightContentCol1>
          <HeadingStyle>
            <h2>Enter your details</h2>
            <Back to="/schedule">
              <MdChevronLeft />
              Go back
            </Back>
          </HeadingStyle>

          <Button to="/confirm-booking">CONTINUE</Button>
        </RightContentCol1>
        <RightContentCol2>
          <BookingSummary />
        </RightContentCol2>
      </RightContent>
    </ContentContainer>
  );
}

export default EnterDetails;
