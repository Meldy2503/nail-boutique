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

function Schedule() {
  return (
    <div>
      <ContentContainer>
        <Sidebar />
        <RightContent>
          <RightContentCol1>
            <Back to="/select-technician">Back</Back>
            <h1>Shedule</h1>
            <Button to="/enter-details">CONTINUE</Button>
          </RightContentCol1>
          <RightContentCol2>
            <BookingSummary />
          </RightContentCol2>
        </RightContent>
      </ContentContainer>
    </div>
  );
}

export default Schedule;
