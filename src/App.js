import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./reuseableComponents/globalStyle";
import Booking from "./components/myAppointments/booking";
import MyAppointmentPage from "./pages/MyAppointmentPage";
import Navbar from "./components/navbar";
// import SelectServicePage from "./pages/selectServicePage";
// import Booking from "./components/myAppointments/booking";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import NotificationPage from "./pages/NotificationPage";
// import MyAppointmentPage from "./pages/MyAppointmentPage";
import ConfirmBooking from "./components/myAppointments/confirmBooking";

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
    secondary6: "#555555",
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
            <Route path="/select-location" element={<MyAppointmentPage />} />
            {/* <Route path="/*" element={<Booking />} /> */}
            {/* <Route path="/*" element={<MyAppointmentPage />} />
            <Route path="/dashboard" element={<SelectServicePage />} /> */}
            <Route path="/update-profile" element={<UpdateProfilePage />} />
            <Route path="/notifications" element={<NotificationPage />} />
            <Route path="/confirm-booking" element={<ConfirmBooking />} />
          </Routes>
        </Fragment>
      </ThemeProvider>
    </Router>
  );
}

export default App;
