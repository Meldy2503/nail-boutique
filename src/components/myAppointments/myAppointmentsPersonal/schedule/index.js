import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
import RadioButton from "../../../../reuseableComponents/RadioButton";
import greenDot from "../../../../images/green-dot.png";
import redDot from "../../../../images/red-dot.png";

function Schedule() {
  const { updateList, date, onDateChange } = useContext(SummaryContext);
  const handleClick = (schedule) => {
    updateList({ schedule });
    onDateChange(schedule);
  };
  const handleCheckbox = (schedule) => {
    updateList({ schedule });
  };

  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <RightContentCol1>
          <HeadingStyle data-aos="zoom-in">
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
                tileContent={({ date, view }) =>
                  view === "month" && date.getDay() !== 0 ? (
                    <div>
                      <img
                        style={{
                          position: "relative",
                          bottom: "90%",
                          left: "190%",
                          width: ".4rem",
                        }}
                        src={greenDot}
                        alt="greenDot"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        style={{
                          position: "relative",
                          bottom: "90%",
                          left: "190%",
                          width: ".4rem",
                        }}
                        src={redDot}
                        alt="redDot"
                      />
                    </div>
                  )
                }
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
                      <RadioButton
                        onChange={() => handleCheckbox(time)}
                        value={time.time}
                        label={time.time}
                        name="time"
                      />
                    </Option>
                  );
                })}
              </SelectAvailableTime>
            </Time>
          </ScheduleContainer>
          <Waitlist>
            <Link className="link" to="/waitlist">
              Join our waitlist
            </Link>
          </Waitlist>
          <ButtonContainer>
            <Button to="/my-appointments/personal-booking/enter-details">
              ADD OTHER SERVICES
            </Button>
          </ButtonContainer>
        </RightContentCol1>
        <RightContentCol2>
          <BookingSummary />
        </RightContentCol2>
      </RightContent>
    </ContentContainer>
  );
}

export default Schedule;
