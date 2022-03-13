import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./reuseableComponents/globalStyle";
// import MyAppointmentPage from "./pages/MyAppointmentPage";
import Booking from "./components/myAppointments/booking";
import Navbar from "./components/navbar";
import SelectServicePage from "./pages/SelectServicePage";
import SelectServices2Page from "./pages/SelectServices2Page";
import SelectLocationPage from "./pages/SelectLocationPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import NotificationPage from "./pages/NotificationPage";
import ConfirmBooking from "./components/myAppointments/confirmBooking";
import { LeftContent } from "./reuseableComponents/containerStyle";

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
            <Route path="/booking" element={<Booking />} />
            <Route path="/select-location" element={<SelectLocationPage />} />
            <Route path="/select-services" element={<SelectServicePage />} />
            <Route path="/select-services2" element={<SelectServices2Page />} />
            <Route path="/confirm-booking" element={<ConfirmBooking />} />
            <Route path="/update-profile" element={<UpdateProfilePage />} />
            <Route path="/notifications" element={<NotificationPage />} />
          </Routes>
          <LeftContent />
        </Fragment>
      </ThemeProvider>
    </Router>
  );
}

export default App;
