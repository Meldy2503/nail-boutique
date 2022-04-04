import React, { useContext } from "react";
import { SummaryContext } from "../../../../summaryContext";
import BookingSummary from "../bookingSummary";
import {
  Button,
  ButtonContainer,
} from "../../../../reuseableComponents/buttonStyle";
import { MdChevronLeft } from "react-icons/md";
import {
  ContentContainer,
  RightContent,
  RightContentCol1,
  RightContentCol2,
} from "../../../../reuseableComponents/containerStyle";
import Sidebar from "../../../sidebar";
import {
  Option,
  ScheduleContainer,
  SelectAvailableTime,
  Time,
  Day,
  Dots,
  Waitlist,
} from "./scheduleStyle";
import {
  HeadingStyle,
  Back,
} from "../../../../reuseableComponents/headingStyle";
import Calendar from "react-calendar";
import "./calendar.css";
import { CalendarContainer } from "react-datepicker";
import timeData from "./scheduleData";
import CheckBox from "../../../../reuseableComponents/Checkbox";
// import { AiOutlineClockCircle } from "react-icons/ai";

function Schedule() {
  const { updateList, date, onDateChange } = useContext(SummaryContext);
  const handleClick = (schedule) => {
    updateList({ schedule });
    onDateChange();
  };

  return (
    <div>
      <ContentContainer>
        <Sidebar />
        <RightContent>
          <RightContentCol1>
            <HeadingStyle>
              <h2>Schedule</h2>
              <Back to="/my-appointments/personal-booking/select-technician">
                <MdChevronLeft />
                Go back
              </Back>
            </HeadingStyle>
            <ScheduleContainer>
              <CalendarContainer>
                <Calendar
                  calendarType="US"
                  onChange={handleClick}
                  value={date}
                />
              </CalendarContainer>
              <Dots>
                <div>
                  <span className="available"></span>
                  <p>Available</p>
                </div>
                <div>
                  <span className="unavailable"></span>
                  <p>Unavailable</p>
                </div>
              </Dots>
              <Time>
                <h1>Available Time</h1>

                <SelectAvailableTime>
                  {timeData.map((time) => {
                    return (
                      <Option key={time.id}>
                        <CheckBox label={time.time} name={time.name} />
                      </Option>
                    );
                  })}
                </SelectAvailableTime>
              </Time>
            </ScheduleContainer>
            <Waitlist to="/waitlist">Join our waitlist</Waitlist>
            <ButtonContainer>
              <Button to="/my-appointments/personal-booking/enter-details">
                ADD OTHER SERVICES
              </Button>
            </ButtonContainer>
          </RightContentCol1>
          <RightContentCol2>
            <BookingSummary />
            {/* {date.toDateString()} */}
            {/* {summaryList && display && (
              <Day>
                <AiOutlineClockCircle className="icon" />
                <h6>{date.toDateString()} &nbsp;- </h6>
                <h6>&nbsp;09:00AM &nbsp;-&nbsp;</h6>
                <p>In 21 days</p>
              </Day>
            )} */}
          </RightContentCol2>
        </RightContent>
      </ContentContainer>
    </div>
  );
}

export default Schedule;
