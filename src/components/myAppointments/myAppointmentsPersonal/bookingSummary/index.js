import React, { useContext } from "react";
import { SummaryContext } from "../../../../summaryContext";
import {
  SummaryContainer,
  Title,
  LocationContainer,
  Location,
  Service,
  Manicure,
  Booking,
  SubTotal,
  Technician,
  Day,
  Total,
  // Button,
} from "./bookingSummaryStyle";

import { VscLocation } from "react-icons/vsc";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { AiOutlineClockCircle } from "react-icons/ai";
import avatar from "../../../../images/avatar1.png";
// import { ThemeConsumer } from "styled-components";

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
        <LocationContainer>
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
        </LocationContainer>
      )}
      {summaryList.services.length && (
        <Service>
          <Manicure>
            <div>
              {/* {summaryList.filter()} */}
              {/* <h6>Manicure:</h6>
              <p> N5,000.00</p> */}
              <h6>{summaryList.services[2].product}</h6>
              <p> {`₦${summaryList.services[2].price}`}</p>
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
      <Booking>
        {summaryList.technician && (
          <Technician>
            <p> Technician Selected</p>
            <div>
              <IoIosCheckmarkCircle className="icon" />
              <img src={avatar} alt="avatar" />

              <span className="name">
                <h6>cynthia</h6>
                <p>Hair stylist - 26 yrs</p>
              </span>
            </div>
          </Technician>
        )}
        {summaryList.schedule && (
          <Day>
            <AiOutlineClockCircle className="icon" />

            <h6>
              {"Thur, 15th March, 2022" +
                " " +
                "- 09:00AM -" +
                " " +
                "In 21 days"}
            </h6>

            {/* {console.log(date.toDateString())} */}
            {/* <h6>
              thur, 14th 2022 - 09:00AM - <em>In 21 days</em>
            </h6> */}
          </Day>
        )}
      </Booking>
      <Total>
        <div>
          <h6>BOOKING TOTAL:</h6>
          <p> N5,750.00</p>
        </div>
        {/* <Button to="/confirm">CONFIRM</Button> */}
      </Total>
    </SummaryContainer>
  );
}

export default BookingSummary;
