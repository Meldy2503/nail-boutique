import React, { useContext } from "react";
import { SummaryContext } from "../../../../summaryContext";
import { Button } from "../../../../reuseableComponents/buttonStyle";
import {
  ContentContainer,
  RightContent,
  RightContentCol1,
  RightContentCol2,
} from "../../../../reuseableComponents/containerStyle";
import { MdChevronLeft } from "react-icons/md";
import Sidebar from "../../../sidebar";
import BookingSummary from "../bookingSummary";
import { HeadingStyle, Back, InputField } from "./expectedClientsStyle";

function ExpectedClients() {
  const { updateList, NumberOfExpectedclient, handleExpectedClient } =
    useContext(SummaryContext);
  const handleChange = (numberOfClients) => {
    updateList({ numberOfClients });
    handleExpectedClient(numberOfClients);
  };

  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <RightContentCol1>
          <HeadingStyle data-aos="zoom-in">
            <h2>Number of Expected Clients</h2>
            <Back to="/my-appointments/group-booking/select-services">
              <MdChevronLeft />
              Go back
            </Back>
          </HeadingStyle>
          <InputField data-aos="fade-up">
            <input
              type="number"
              name="expected-clients"
              id="expected-clients"
              placeholder="Enter number of expected clients"
              value={NumberOfExpectedclient}
              onChange={handleChange}
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
