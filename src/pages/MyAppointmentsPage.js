import React, { Fragment } from "react";
import Booking from "../components/booking/index";
import { Outlet } from "react-router-dom";

function MyAppointmentsPage() {
  return (
    <Fragment>
      <Booking />
      <Outlet />
    </Fragment>
  );
}

export default MyAppointmentsPage;
