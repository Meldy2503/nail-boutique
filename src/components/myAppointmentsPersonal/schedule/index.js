import React from "react";
import BookingSummary from "../bookingSummary";
import { Back } from "../../../reuseableComponents/goBackStyle";
import {
  Button,
  ButtonContainer,
} from "../../../reuseableComponents/buttonStyle";
import { MdChevronLeft } from "react-icons/md";
import {
  ContentContainer,
  RightContent,
  RightContentCol1,
  RightContentCol2,
} from "../../../reuseableComponents/containerStyle";
import Sidebar from "../../sidebar";
import {
  Option,
  ScheduleContainer,
  SelectAvailableTime,
  Time,
  Waitlist,
} from "./scheduleStyle";
import { HeadingStyle } from "../../../reuseableComponents/headingStyle";
import Calendar from "react-calendar";
import "./calendar.css";
import { CalendarContainer } from "react-datepicker";
import timeData from "./scheduleData";

function Schedule() {
  const [value, onChange] = React.useState(new Date());
  return (
    <div>
      <ContentContainer>
        <Sidebar />
        <RightContent>
          <RightContentCol1>
            <HeadingStyle>
              <h2>Schedule</h2>
              <Back to="/select-technician">
                <MdChevronLeft />
                Go back
              </Back>
            </HeadingStyle>
            <ScheduleContainer>
              <CalendarContainer>
                <Calendar calendarType="US" onChange={onChange} value={value} />
              </CalendarContainer>
              <Time>
                <h1>Available Time</h1>

                <SelectAvailableTime>
                  {timeData.map((time) => {
                    return (
                      <Option key={time.id}>
                        <input
                          type="checkbox"
                          name={time.name}
                          id={time.name}
                        />
                        <label htmlFor={time.name}>{time.time}</label>
                      </Option>
                    );
                  })}
                </SelectAvailableTime>
              </Time>
            </ScheduleContainer>
            <Waitlist>
              <input type="checkbox" name="waitlist" id="waitlist" />
              <label htmlFor="waitlist">Join our waitlist</label>
            </Waitlist>
            <ButtonContainer>
              <Button to="/enter-details">ADD OTHER SERVICES</Button>
            </ButtonContainer>
          </RightContentCol1>
          <RightContentCol2>
            <BookingSummary />
          </RightContentCol2>
        </RightContent>
      </ContentContainer>
    </div>
  );
}

export default Schedule;
