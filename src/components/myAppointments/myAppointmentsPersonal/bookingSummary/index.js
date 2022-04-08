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

function BookingSummary() {
  const { summaryList, date } = useContext(SummaryContext);
  console.log({ summaryList });

  const initialValue = 0;
  let newSubtotal = summaryList.services;

  const addSubtotal = newSubtotal.reduce(
    (prevValue, currentValue) => prevValue + currentValue.price,
    initialValue
  );
  const VAT = 0.075 * addSubtotal;
  const addBookingTotal = VAT + addSubtotal;

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
      {summaryList.services && (
        <Service>
          {summaryList.services.map((s) => {
            return (
              <Manicure key={s.id}>
                <div>
                  <h6>{s.product}:</h6>
                  <p> ₦{s.price}</p>
                </div>
              </Manicure>
            );
          })}
          <SubTotal>
            <div>
              <h6>SUB TOTAL:</h6>
              <p>₦{addSubtotal}</p>
            </div>
            <div>
              <h6>VAT</h6>
              <p>₦{VAT}</p>
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
              <img src={summaryList.technician.avatar} alt="avatar" />

              <span className="name">
                <h6>{summaryList.technician.name}</h6>
                <p>
                  {summaryList.technician.role +
                    " - " +
                    summaryList.technician.age}
                  yrs
                </p>
              </span>
            </div>
          </Technician>
        )}
        {summaryList.schedule && (
          <Day>
            <AiOutlineClockCircle className="icon" />
            <h6>
              {date.toDateString()} &nbsp; - &nbsp;{summaryList.schedule.time}
            </h6>
            {/* <h6>
              thur, 14th 2022 - 09:00AM - <em>In 21 days</em>
            </h6> */}
          </Day>
        )}
      </Booking>

      <Total>
        <div>
          <h6>BOOKING TOTAL:</h6>
          <p>₦{addBookingTotal.toFixed(2)}</p>
        </div>
      </Total>
    </SummaryContainer>
  );
}

export default BookingSummary;
