import React from "react";
import SelectLocation from "../components/myAppointments/selectLocation";
import SelectTechnician from "../components/myAppointments/selectTechnician";

function MyAppointmentPage() {
  return (
    <div>
      <SelectLocation />
      <SelectTechnician />
    </div>
  );
}

export default MyAppointmentPage;
