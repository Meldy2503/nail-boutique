import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./reuseableComponents/globalStyle";
import Navbar from "./components/navbar/index";
import MyAppointments from "./components/myAppointments/index";
import UpdateProfile from "./components/updateProfile/index";
import Notifications from "./components/notifications/index";

// my appointments personal
import SelectLocationPersonal from "./components/myAppointments/myAppointmentsPersonal/selectLocation/index";
import SelectServicePersonal from "./components/myAppointments/myAppointmentsPersonal/selectService/index";
import SelectServiceTwoPersonal from "./components/myAppointments/myAppointmentsPersonal/selectServiceTwo/index";
import SelectTechnicianPersonal from "./components/myAppointments/myAppointmentsPersonal/selectTechnician/index";
import SchedulePersonal from "./components/myAppointments/myAppointmentsPersonal/schedule/index";
import ConfirmBookingPersonal from "./components/myAppointments/myAppointmentsPersonal/confirmBooking/index";
import EnterDetailsPersonal from "./components/myAppointments/myAppointmentsPersonal/enterDetails/index";

// my appointments group
import SelectLocationGroup from "./components/myAppointments/myAppointmentsGroup/selectLocation/index";
import SelectServiceGroup from "./components/myAppointments/myAppointmentsGroup/selectService/index";
import SelectServiceTwoGroup from "./components/myAppointments/myAppointmentsGroup/selectServiceTwo/index";
import ScheduleGroup from "./components/myAppointments/myAppointmentsGroup/schedule/index";
import ConfirmBookingGroup from "./components/myAppointments/myAppointmentsGroup/confirmBooking/index";
import EnterDetailsGroup from "./components/myAppointments/myAppointmentsGroup/enterDetails/index";
import ExpectedClientsGroup from "./components/myAppointments/myAppointmentsGroup/expectedClients/index";

// Outlets
import MyAppointmentIndex from "./components/pages/MyAppointmentIndex";
import PersonalBookingIndex from "./components/pages/PersonalBookingIndex";
import GroupBookingIndex from "./components/pages/GroupBookingIndex";
import Dashboard from "./components/dashboard";

const theme = {
  colors: {
    primary1: "#000000",
    primary2: "#1C1C1C",
    primary3: "#212121",
    primary4: "#141414",
    primary5: "#3C3C3C",
    primary6: "#585858",
    primary7: "#262626",
    primary8: "#292929",

    secondary1: "#FFFFFF",
    secondary2: "#B1B1B1",
    secondary3: "#BBBBBB",
    secondary4: "#959595",
    secondary5: "#9C9C9C",
    secondary6: "#676767",
    secondary7: "#737373",

    tertiary1: "#B57224",
    tertiary2: "#E48F04",
    tertiary3: "#F5D061",
    tertiary4: "#00FF66",
    tertiary5: "#FF0000",
  },

  mediaQuery: {
    mobile: "768px",
    tablet: "960px",
  },
};

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          <Navbar />
          <Routes>
            <Route path="/*" element={<Dashboard />} />
            <Route path="/my-appointments" element={<MyAppointmentIndex />}>
              <Route index element={<MyAppointments />} />
              <Route path="personal-booking" element={<PersonalBookingIndex />}>
                <Route index element={<SelectLocationPersonal />} />
                <Route
                  path="select-location"
                  element={<SelectLocationPersonal />}
                />
                <Route
                  path="select-services"
                  element={<SelectServicePersonal />}
                />
                <Route
                  path="confirm-booking"
                  element={<ConfirmBookingPersonal />}
                />
                <Route
                  path="select-servicestwo"
                  element={<SelectServiceTwoPersonal />}
                />
                <Route
                  path="select-technician"
                  element={<SelectTechnicianPersonal />}
                />
                <Route path="schedule" element={<SchedulePersonal />} />
                <Route
                  path="enter-details"
                  element={<EnterDetailsPersonal />}
                />
              </Route>
              <Route path="group-booking" element={<GroupBookingIndex />}>
                <Route index element={<SelectLocationGroup />} />
                <Route
                  path="select-location"
                  element={<SelectLocationGroup />}
                />
                <Route
                  path="select-services"
                  element={<SelectServiceGroup />}
                />
                <Route
                  path="confirm-booking"
                  element={<ConfirmBookingGroup />}
                />
                <Route
                  path="select-servicestwo"
                  element={<SelectServiceTwoGroup />}
                />
                <Route
                  path="expected-clients"
                  element={<ExpectedClientsGroup />}
                />
                <Route path="schedule" element={<ScheduleGroup />} />
                <Route path="enter-details" element={<EnterDetailsGroup />} />
              </Route>
            </Route>
            <Route path="update-profile" element={<UpdateProfile />} />
            <Route path="notifications" element={<Notifications />} />
          </Routes>
        </Fragment>
      </ThemeProvider>
    </Router>
  );
}

export default App;
