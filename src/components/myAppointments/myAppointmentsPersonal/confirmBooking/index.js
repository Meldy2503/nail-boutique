import React, { useState } from "react";
import {
  ContentContainer,
  RightContent,
  RightContentCol1,
  RightContentCol2,
} from "../../../../reuseableComponents/containerStyle";
import Sidebar from "../../../sidebar";
import {
  Agreement,
  ConfirmBookingContainer,
  Location,
  Terms,
} from "./confirmBookingStyle";
import { MdChevronLeft } from "react-icons/md";
import confirmLocation from "./confirmBookingData";
import { IoLocationOutline } from "react-icons/io5";
import {
  Button,
  ButtonContainer,
} from "../../../../reuseableComponents/buttonStyle";
import BookingSummary from "../bookingSummary";
import Success from "../../../myAppointments/myAppointmentsPersonal/success/index";
import { Back } from "../../../../reuseableComponents/goBackStyle";
import { HeadingStyle } from "../../../../reuseableComponents/headingStyle";
import { GoCheck } from "react-icons/go";
import Checkbox from "react-custom-checkbox";

function ConfirmBooking() {
  const [popup, setPopup] = useState(false);
  const handlePopup = () => {
    setPopup((prevState) => !prevState);
  };
  return (
    <div>
      <ContentContainer>
        <Sidebar />
        <RightContent>
          <RightContentCol1>
            <ConfirmBookingContainer>
              <HeadingStyle>
                <h2>Confirm Booking</h2>
                <Back to="/my-appointments/personal-booking/enter-details">
                  <MdChevronLeft />
                  Go back
                </Back>
              </HeadingStyle>
              <Location>
                <span>
                  <IoLocationOutline className="pin" />
                  <p>{confirmLocation.location}</p>
                </span>
              </Location>
              <Terms>
                <h2>Terms & Condition</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                  nulla ut metus varius laoreet. Quisque rutrum. Aenean
                  imperdiet. Etiam ultricies nisi vel augue. Curabitur
                  ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                  semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                  quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                  Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                  ut libero .
                </p>
              </Terms>
              <div>
                <Checkbox
                  icon={
                    <div
                      style={{
                        display: "flex",
                        flex: 1,
                        backgroundColor: "#271602",
                        alignSelf: "center",
                        borderRadius: "4px",
                        height: "110%",
                        width: "110%",
                        border: " 1px solid #B57224",
                      }}
                    >
                      <GoCheck color="#B57224" size={15} />
                    </div>
                  }
                  name="agreement"
                  className="checkbox"
                  checked={true}
                  onChange={(value) => {
                    console.log(value);
                  }}
                  borderColor="#696969"
                  borderWidth={1}
                  style={{ cursor: "pointer" }}
                  labelStyle={{
                    marginLeft: 5,
                    userSelect: "none",
                  }}
                  label="I agree to the Terms and
                    Condition"
                />
              </div>
              <ButtonContainer>
                <Button
                  onClick={handlePopup}
                  to="/my-appointments/personal-booking/confirm-booking"
                >
                  TEMP CONTINUE
                </Button>
              </ButtonContainer>
            </ConfirmBookingContainer>
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
