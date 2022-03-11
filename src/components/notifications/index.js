import React from "react";
import { RightContent } from "../../reuseableComponents/containerStyle";
import Sidebar from "../sidebar";

function Notification() {
  return (
    <div>
      <Sidebar />
      <RightContent></RightContent>
    </div>
  );
}

export default Notification;
