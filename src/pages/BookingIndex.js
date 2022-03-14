import React from "react";

import { Outlet } from "react-router";
// import { BookingStyle } from "../components/myAppointmentsPersonal/booking/bookingStyle";
import Sidebar from "../components/sidebar";
import {
  ContentContainer,
  RightContent,
} from "../reuseableComponents/containerStyle";

function BookingIndex() {
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent display="block">
        <Outlet />
      </RightContent>
    </ContentContainer>
  );
}

export default BookingIndex;
