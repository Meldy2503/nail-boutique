import React from "react";
import {
  BookingSummaryStyle,
  SummaryContainer,
  Title,
  Service,
  SubTotal,
  Total,
} from "./bookingSummaryStyle";
import { Button } from "../../../reuseableComponents/buttonStyle";

function BookingSummary() {
  return (
    <BookingSummaryStyle>
      <SummaryContainer>
        <Title>
          <h2>Booking Summary</h2>
          <p>Lorem Ipsum has been the industry's iudst standard dummy.</p>
        </Title>
        <Service>
          <span>
            <p>Basic Manicure:</p>
            <p> N5,000.00</p>
          </span>
          <span>
            <p>HAIR RELAXING:</p>
            <p> N8,000.00</p>
          </span>
        </Service>
        <SubTotal>
          <span>
            <p>SUB Total:</p>
            <p> N5,000.00</p>
          </span>
          <span>
            <p>VAT</p>
            <p>N750.00</p>
          </span>
        </SubTotal>
        <Button to="/confirm">Confirm Booking</Button>
        <Total>
          <p>BOOKING Total:</p>
          <p> N5,750.00</p>
        </Total>
      </SummaryContainer>
    </BookingSummaryStyle>
  );
}

export default BookingSummary;
