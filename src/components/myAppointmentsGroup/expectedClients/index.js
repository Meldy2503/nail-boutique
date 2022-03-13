import React from "react";
import { Button } from "../../../reuseableComponents/buttonStyle";
import {
  ContentContainer,
  RightContent,
  RightContentCol1,
  RightContentCol2,
} from "../../../reuseableComponents/containerStyle";
import { Back } from "../../../reuseableComponents/goBack/goBackStyle";
import { MdChevronLeft } from "react-icons/md";
import { HeadingStyle } from "../../../reuseableComponents/headingStyle";
import Sidebar from "../../sidebar";
import BookingSummary from "../bookingSummary";
import { InputField } from "./expectedClientsStyle";

function index() {
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <RightContentCol1>
          <HeadingStyle>
            <h2>Number of Expected Clients</h2>
            <Back to="/enter-details">
              <MdChevronLeft />
              Go back
            </Back>
          </HeadingStyle>
          <InputField>
            <input type="number" name="expClnts" id="expClnts" />
          </InputField>
          <Button to="/schedule">CONTINUE</Button>
        </RightContentCol1>
        <RightContentCol2>
          <BookingSummary />
        </RightContentCol2>
      </RightContent>
    </ContentContainer>
  );
}

export default index;
