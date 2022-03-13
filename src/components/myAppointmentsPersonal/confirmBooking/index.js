import React from "react";
import {
  ContentContainer,
  RightContent,
} from "../../../reuseableComponents/containerStyle";
import { HeadingStyle } from "../../../reuseableComponents/headingStyle";
import Sidebar from "../../sidebar";
import {
  Agreement,
  ConfirmBookingContainer,
  Location,
  Terms,
} from "./confirmBookingStyle";
import { MdChevronLeft } from "react-icons/md";
import confirmLocation from "./confirmBookingData";
import { IoLocationOutline } from "react-icons/io5";
import { Back } from "../../../reuseableComponents/goBack/goBackStyle";
import { Button } from "../../../reuseableComponents/buttonStyle";

function ConfirmBooking() {
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <ConfirmBookingContainer>
          <HeadingStyle>
            <h2>Confirm Booking</h2>
            <Back to="/enter-details">
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
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
              imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
              ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
              tellus eget condimentum rhoncus, sem quam semper libero, sit amet
              adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
              pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
              tempus. Donec vitae sapien ut libero .
            </p>
          </Terms>
          <Agreement>
            <input type="checkbox" name="agreement" id="agreement" />
            <label htmlFor="agreement"></label> I agree to the Terms and
            Condition
          </Agreement>
          <Button to="/success">CONTINUE</Button>
        </ConfirmBookingContainer>
      </RightContent>
    </ContentContainer>
  );
}

export default ConfirmBooking;