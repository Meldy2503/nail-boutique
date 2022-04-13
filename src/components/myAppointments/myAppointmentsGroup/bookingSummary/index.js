import React, { useContext } from "react";
import { SummaryContext } from "../../../../summaryContext";
import {
  SummaryContainer,
  LocationContainer,
  Title,
  Service,
  Location,
  Manicure,
  Booking,
  SubTotal,
  Day,
  Total,
  NumberOfClients,
  // Button,
} from "./bookingSummaryStyle";

import { VscLocation } from "react-icons/vsc";
import { AiOutlineClockCircle } from "react-icons/ai";

function BookingSummary() {
  const { summaryList, date, NumberOfExpectedclient, DaysToAppointmentDay } =
    useContext(SummaryContext);
  console.log({ summaryList });

  const initialValue = 0;
  let newSubtotal = summaryList.services;

  const addSubtotal = newSubtotal.reduce(
    (prevValue, currentValue) =>
      prevValue + currentValue.price * NumberOfExpectedclient,
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
                  <p> ₦{s.price.toLocaleString()}</p>
                </div>
              </Manicure>
            );
          })}
          {summaryList.numberOfClients && (
            <NumberOfClients>
              <div>
                <h6>NUMBER OF CLIENTS:</h6>
                <p>{NumberOfExpectedclient}</p>
              </div>
            </NumberOfClients>
          )}
          <SubTotal>
            <div>
              <h6>SUB TOTAL:</h6>
              <p>₦{addSubtotal.toLocaleString()}</p>
            </div>
            <div>
              <h6>VAT:</h6>
              <p>₦{VAT.toLocaleString()}</p>
            </div>
          </SubTotal>
        </Service>
      )}
      <Booking>
        {summaryList.schedule && (
          <Day>
            <AiOutlineClockCircle className="icon" />
            <h6>
              {date.toDateString()} - {summaryList.schedule.time} -
              <em> In {DaysToAppointmentDay} days</em>
            </h6>
          </Day>
        )}
      </Booking>

      <Total>
        <div>
          <h6>BOOKING TOTAL:</h6>
          <p>
            ₦
            {addBookingTotal.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
      </Total>
    </SummaryContainer>
  );
}

export default BookingSummary;
