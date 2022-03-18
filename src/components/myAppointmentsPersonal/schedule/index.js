import React from "react";
import BookingSummary from "../bookingSummary";
import { Back } from "../../../reuseableComponents/goBack/goBackStyle";
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
                <Calendar onChange={onChange} value={value} />
              </CalendarContainer>
              <Time>
                <h1>Available Time</h1>
                <SelectAvailableTime>
                  <Option>
                    <input type="checkbox" name="9pm" id="9am" />
                    <label htmlFor="9am">9:00AM</label>
                  </Option>
                  <Option>
                    <input type="checkbox" name="1pm" id="1pm" />
                    <label htmlFor="1pm">1:00PM</label>
                  </Option>
                  <Option>
                    <input type="checkbox" name="3pm" id="3pm" />
                    <label htmlFor="3pm">3:00PM</label>
                  </Option>
                  <Option>
                    <input type="checkbox" name="5pm" id="5pm" />
                    <label htmlFor="5pm">5:00PM</label>
                  </Option>
                  <Option>
                    <input type="checkbox" name="7pm" id="7pm" />
                    <label htmlFor="7pm">7:00PM</label>
                  </Option>
                </SelectAvailableTime>
              </Time>
            </ScheduleContainer>
            {/* <Button to="/enter-details">ADD ANOTHER SERVICES</Button> */}
            <Waitlist>
              <input type="checkbox" name="waitlist" id="waitlist" />
              <label htmlFor="waitlist"></label>Join our waitlist
            </Waitlist>
            <ButtonContainer>
              <Button to="/enter-details">ADD ANOTHER SERVICES</Button>
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
