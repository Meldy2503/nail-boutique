import React from "react";
import {
  ContentContainer,
  RightContent,
} from "../../../reuseableComponents/containerStyle";
import Sidebar from "../../sidebar";
import BookingSummary from "../bookingSummary";

function Booking() {
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <BookingSummary />
      </RightContent>
    </ContentContainer>
  );
}

export default Booking;
