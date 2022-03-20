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

function EnterDetails() {
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <RightContentCol1>
          <Back to="/schedule">Back</Back>
          <h1>Enter your details</h1>
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
