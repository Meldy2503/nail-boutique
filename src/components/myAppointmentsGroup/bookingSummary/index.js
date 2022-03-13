import React from "react";
import {
  SummaryContainer,
  Intro,
  Title,
  Service,
  Location,
  Manicure,
  Booking,
  SubTotal,
  Technician,
  Day,
  Total,
  Btn,
} from "./bookingSummaryStyle";
import { Button } from "../../../reuseableComponents/buttonStyle";
import { VscLocation } from "react-icons/vsc";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { AiOutlineClockCircle } from "react-icons/ai";
import avatar from "../../../images/avatar1.png";

function BookingSummary() {
  return (
    <SummaryContainer>
      <Intro>
        <Title>
          <h2>Booking Summary</h2>
          <p>Lorem Ipsum has been the industry's iudst standard dummy.</p>
        </Title>
        <Location>
          <div>
            <span>
              <VscLocation />
            </span>
            <p>
              The Nail Boutique - Ikoyi 7 - 12 Rumens Cls Road, Lagos, Nigeria.
            </p>
          </div>
        </Location>
      </Intro>

      <Service>
        <Manicure>
          <div>
            <h6>BASIC MANICURE:</h6>
            <p> N5,000.00</p>
          </div>
          <div>
            <h6>HAIR RELAXING:</h6>
            <p> N8,000.00</p>
          </div>
        </Manicure>
        <SubTotal>
          <div>
            <h6>SUB TOTAL:</h6>
            <p> N5,000.00</p>
          </div>
          <div>
            <h6>VAT</h6>
            <p>N750.00</p>
          </div>
        </SubTotal>
      </Service>
      <Booking>
        <Technician>
          <p> Technician Selected</p>
          <div>
            <IoIosCheckmarkCircle className="icon" />
            <img src={avatar} alt="avatar" />

            <span className="name">
              <h6> Ademide Ruth </h6>
              <p> Hair Stylist - 26Yrs</p>
            </span>
          </div>
        </Technician>
        <Day>
          <AiOutlineClockCircle className="icon" />

          <h6>
            Thu, 6th Feb., 2022 - 09:00AM - <em>In 21 days</em>
          </h6>
        </Day>
        <Total>
          <h6>BOOKING Total:</h6>
          <p> N5,750.00</p>
        </Total>
        <Btn>
          <Button padding=".5rem 26%" to="/confirm">
            Confirm
          </Button>
        </Btn>
      </Booking>
    </SummaryContainer>
  );
}

export default BookingSummary;
