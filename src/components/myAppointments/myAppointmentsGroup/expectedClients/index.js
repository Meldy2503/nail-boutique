import React from "react";
import { Button } from "../../../../reuseableComponents/buttonStyle";
import {
  ContentContainer,
  RightContent,
  RightContentCol1,
  RightContentCol2,
} from "../../../../reuseableComponents/containerStyle";
import { MdChevronLeft } from "react-icons/md";
import {
  HeadingStyle,
  Back,
} from "../../../../reuseableComponents/headingStyle";
import Sidebar from "../../../sidebar";
import BookingSummary from "../bookingSummary";
import { InputField } from "./expectedClientsStyle";

function ExpectedClients() {
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <RightContentCol1>
          <HeadingStyle>
            <h2>Number of Expected Clients</h2>
            <Back to="/my-appointments/group-booking/select-servicestwo">
              <MdChevronLeft />
              Go back
            </Back>
          </HeadingStyle>
          <InputField>
            <input
              type="number"
              name="expected-clients"
              id="expected-clients"
            />
          </InputField>
          <Button to="/my-appointments/group-booking/schedule">CONTINUE</Button>
        </RightContentCol1>
        <RightContentCol2>
          <BookingSummary />
        </RightContentCol2>
      </RightContent>
    </ContentContainer>
  );
}

export default ExpectedClients;
