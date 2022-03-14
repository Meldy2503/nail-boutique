import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./reuseableComponents/globalStyle";
import { LeftContent } from "./reuseableComponents/containerStyle";
import UpdateProfile from "./components/updateProfile/index";
import Navbar from "./components/navbar/index";
import Notification from "./components/notifications/index";
import Booking from "./components/myAppointmentsPersonal/booking/index";
import SelectLocation from "./components/myAppointmentsPersonal/selectLocation/index";
import SelectService from "./components/myAppointmentsPersonal/selectService/index";
import SelectServiceTwo from "./components/myAppointmentsPersonal/selectServiceTwo/index";
import SelectTechnician from "./components/myAppointmentsPersonal/selectTechnician/index";
import Schedule from "./components/myAppointmentsPersonal/schedule/index";
import ConfirmBooking from "./components/myAppointmentsPersonal/confirmBooking/index";
import EnterDetails from "./components/myAppointmentsPersonal/enterDetails/index";
// import Success from "./components/myAppointmentsPersonal/success/index";

const theme = {
  colors: {
    primary1: "#000000",
    primary2: "#1C1C1C",
    primary3: "#212121",
    primary4: "#141414",
    primary5: "#3C3C3C",
    primary6: "#585858",
    primary7: "#262626",

    secondary1: "#FFFFFF",
    secondary2: "#B1B1B1",
    secondary3: "#BBBBBB",
    secondary4: "#959595",
    secondary5: "#9C9C9C",
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
            <Route path="/*" element={<Booking />} />
            <Route path="/confirm-booking" element={<ConfirmBooking />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/notifications" element={<Notification />} />
            <Route path="/select-location" element={<SelectLocation />} />
            <Route path="/select-services" element={<SelectService />} />
            <Route path="/select-servicestwo" element={<SelectServiceTwo />} />
            <Route path="/select-technician" element={<SelectTechnician />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/enter-details" element={<EnterDetails />} />
            <Route path="/confirm-booking" element={<ConfirmBooking />} />
            {/* <Route path="/success" element={<Success />} /> */}
          </Routes>
          <LeftContent />
        </Fragment>
      </ThemeProvider>
    </Router>
  );
}

export default App;
