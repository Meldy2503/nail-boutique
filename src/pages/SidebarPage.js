import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

function SideBarPage() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}

export default SideBarPage;
