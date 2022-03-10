import React from "react";
import {
  ContentContainer,
  RightContent,
} from "../../../reuseableComponents/containerStyle";
import Sidebar from "../../sidebar";
import SelectLocation from "../selectLocation";

function Booking() {
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <SelectLocation />
      </RightContent>
    </ContentContainer>
  );
}

export default Booking;
