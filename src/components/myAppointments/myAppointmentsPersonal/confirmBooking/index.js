import React, { useContext, useState } from "react";
import { SummaryContext } from "../../../../summaryContext";
import {
  ContentContainer,
  RightContent,
  RightContentCol1,
  RightContentCol2,
} from "../../../../reuseableComponents/containerStyle";
import Sidebar from "../../../sidebar";
import {
  ConfirmBookingContainer,
  Location,
  Terms,
  MobileSummary,
} from "./confirmBookingStyle";
import { MdChevronLeft } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import {
  Button,
  ButtonContainer,
} from "../../../../reuseableComponents/buttonStyle";
import BookingSummary from "../bookingSummary";
import Success from "../../../myAppointments/myAppointmentsPersonal/success/index";
import {
  HeadingStyle,
  Back,
} from "../../../../reuseableComponents/headingStyle";
import CheckBox from "../../../../reuseableComponents/Checkbox";

function ConfirmBooking() {
  const [popup, setPopup] = useState(false);
  const handlePopup = () => {
    setPopup((prevState) => !prevState);
  };

  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const handleAgreement = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  const { summaryList } = useContext(SummaryContext);

  return (
    <div>
      <ContentContainer>
        <Sidebar />
        <RightContent>
          <RightContentCol1>
            <ConfirmBookingContainer>
              <HeadingStyle data-aos="zoom-in">
                <h2>Confirm Booking</h2>
                <Back to="/my-appointments/personal-booking/enter-details">
                  <MdChevronLeft />
                  Go back
                </Back>
              </HeadingStyle>
              {summaryList.location && (
                <Location data-aos="fade-up">
                  <div>
                    <span>
                      <IoLocationOutline className="pin" />
                    </span>
                    <p>
                      {summaryList.location.heading +
                        " " +
                        summaryList.location.address}
                    </p>
                  </div>
                </Location>
              )}

              <MobileSummary data-aos="fade-up">
                <RightContentCol2 mdisplay="flex">
                  <BookingSummary />
                </RightContentCol2>
              </MobileSummary>

              <Terms>
                <h2>Terms & Condition</h2>
                <p>
                  CANCELLATION POLICY: <br /> Cancellations are allowed up to 24
                  hours in advance. <br /> <br /> NO-CASH POLICY <br /> We no
                  longer take cash as a form of payment. Kindly make payment for
                  your service via POS or Transfers only. <br /> <br /> ARRIVAL
                  POLICY:
                  <br /> We operate an appointment only service. Please arrive
                  at least 10 mins early for your scheduled appointment. Please
                  note that we provide a 15 mins grace period for appointment
                  times. Should you arrive any time after this we may not be
                  able to guarantee a service. <br /> <br /> GROUP BOOKING
                  POLICY: <br /> For any bookings of 3 people or more
                  (classified as a Group booking) we will require a non-
                  refundable booking fee to be transferred before the booking is
                  confirmed. This fee is N5k per person and will be deducted
                  from the final bill once services are rendered. The deposit
                  will be forfeited for any no shows (per person) for the date
                  and time of the Group booking. <br /> <br />
                  KIDS POLICY: <br /> We are currently able to serve children of
                  7 to 15 years. Any children younger than this will
                  unfortunately not be attended to.
                </p>
              </Terms>
              <div className="checkbox">
                <CheckBox
                  label="I agree to the Terms and
                    Condition"
                  name="agreement"
                  value="agreement"
                  checked={agreeToTerms}
                  onChange={handleAgreement}
                />
              </div>
            </ConfirmBookingContainer>
            <ButtonContainer>
              <Button
                onClick={handlePopup}
                to="/my-appointments/personal-booking/confirm-booking"
              >
                CONFIRM BOOKING
              </Button>
            </ButtonContainer>
          </RightContentCol1>
          <RightContentCol2>
            <BookingSummary />
          </RightContentCol2>
        </RightContent>
      </ContentContainer>
      {popup && <Success />}
    </div>
  );
}

export default ConfirmBooking;
