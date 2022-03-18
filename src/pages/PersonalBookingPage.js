import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

function PersonalBookingPage() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}

export default PersonalBookingPage;
