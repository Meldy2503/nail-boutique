import React from "react";
import {
  ContentContainer,
  RightContent,
} from "../../../reuseableComponents/containerStyle";
import Sidebar from "../../sidebar";
import UpdateProfile from "../../updateProfile";
// import BookingSummary from "../bookingSummary";

function Booking() {
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <h2>right</h2>
      </RightContent>
    </ContentContainer>
  );
}

export default Booking;
