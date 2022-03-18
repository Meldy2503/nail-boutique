import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./reuseableComponents/globalStyle";
import { LeftContent } from "./reuseableComponents/containerStyle";
import Navbar from "./components/navbar/index";
import SideBarPage from "./pages/SidebarPage";
import MyAppointmentsPage from "./pages/MyAppointmentsPage";
import PersonalBookingPage from "./pages/PersonalBookingPage";
// import GroupBookingPage from "./pages/GroupBookingPage";
import UpdateProfile from "./components/updateProfile/index";
import Notification from "./components/notifications/index";
import SelectLocation from "./components/myAppointmentsPersonal/selectLocation/index";

// bbbbbbbbbbbb
// import SelectService from "./components/myAppointmentsPersonal/selectService/index";
// import SelectServiceTwo from "./components/myAppointmentsPersonal/selectServiceTwo/index";
// import SelectTechnician from "./components/myAppointmentsPersonal/selectTechnician/index";
// import Schedule from "./components/myAppointmentsPersonal/schedule/index";
// import ConfirmBooking from "./components/myAppointmentsPersonal/confirmBooking/index";
// import EnterDetails from "./components/myAppointmentsPersonal/enterDetails/index";

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
            <Route path="/" element={<SideBarPage />}>
              <Route
                path="/"
                element={<Navigate replace to="my-appointments" />}
              />
              <Route path="update-profile" element={<UpdateProfile />} />
              <Route path="notifications" element={<Notification />} />
              <Route path="my-appointments" element={<MyAppointmentsPage />}>
                <Route
                  path="/my-appointments"
                  element={<Navigate replace to="personal-booking" />}
                >
                  <Route
                    path="personal-booking"
                    element={<PersonalBookingPage />}
                  >
                    <Route
                      path="/my-appointments/personal-booking"
                      element={<Navigate replace to="select-location" />}
                    />
                    <Route
                      path="select-location"
                      element={<SelectLocation />}
                    />
                  </Route>
                </Route>
              </Route>
            </Route>

            {/* <Route path="select-services" element={<SelectService />} />
                    <Route
                      path="select-servicestwo"
                      element={<SelectServiceTwo />}
                    />
                    <Route
                      path="select-technician"
                      element={<SelectTechnician />}
                    />
                    <Route path="schedule" element={<Schedule />} />
                    <Route path="enter-details" element={<EnterDetails />} />
                    <Route
                      path="confirm-booking"
                      element={<ConfirmBooking />}
                    />  */}

            {/* <Route path="group-booking" element={<GroupBookingPage />} /> */}

            {/* <Route path="/*" element={<Booking />} />
            <Route path="/confirm-booking" element={<ConfirmBooking />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/notifications" element={<Notification />} />
            <Route path="/select-location" element={<SelectLocation />} />
            <Route path="/select-services" element={<SelectService />} />
            <Route path="/select-servicestwo" element={<SelectServiceTwo />} />
            <Route path="/select-technician" element={<SelectTechnician />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/enter-details" element={<EnterDetails />} />
            <Route path="/confirm-booking" element={<ConfirmBooking />} /> */}
          </Routes>
          <LeftContent />
        </Fragment>
      </ThemeProvider>
    </Router>
  );
}

export default App;
