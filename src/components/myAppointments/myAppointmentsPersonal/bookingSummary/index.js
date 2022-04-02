import React, { useContext } from "react";
import { SummaryContext } from "../../../../summaryContext";
import { SummaryContainer, Title } from "./bookingSummaryStyle";
import {
  // SummaryContainer,
  Intro,
  // Title,
  Service,
  Location,
  Manicure,
  Booking,
  SubTotal,
  Technician,
  Day,
  Total,
  Button,
} from "./bookingSummaryStyle";

import { VscLocation } from "react-icons/vsc";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { AiOutlineClockCircle } from "react-icons/ai";
import avatar from "../../../../images/avatar1.png";

function BookingSummary() {
  const { summaryList } = useContext(SummaryContext);
  console.log({ summaryList });
  return (
    <SummaryContainer>
      <Title>
        <h2>Booking Summary</h2>
        <p>Lorem Ipsum has been the industry's iudst standard dummy.</p>
      </Title>
      {summaryList.location && (
        <Intro>
          <Location>
            <div>
              <span>
                <VscLocation />
              </span>
              <p>
                {summaryList.location.heading +
                  " " +
                  summaryList.location.address}
              </p>
            </div>
          </Location>
        </Intro>
      )}
      {summaryList.services.length && (
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
      )}
      {summaryList.technician && (
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
          {summaryList.schedule && (
            <Day>
              <AiOutlineClockCircle className="icon" />

              <h6>
                Thu, 6th Feb., 2022 - 09:00AM - <em>In 21 days</em>
              </h6>
            </Day>
          )}
        </Booking>
      )}
    </SummaryContainer>
  );
}

export default BookingSummary;
