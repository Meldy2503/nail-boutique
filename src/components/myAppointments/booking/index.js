import React from "react";
import {
  ContentContainer,
  RightContent,
} from "../../../reuseableComponents/containerStyle";
import Sidebar from "../../sidebar";

function Booking() {
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <h2>Meldy</h2>
      </RightContent>
    </ContentContainer>
  );
}

export default Booking;
