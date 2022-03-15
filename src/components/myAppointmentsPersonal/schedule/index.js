import React from "react";
import BookingSummary from "../bookingSummary";
import { Back } from "../../../reuseableComponents/goBack/goBackStyle";
import { Button } from "../../../reuseableComponents/buttonStyle";
import { MdChevronLeft } from "react-icons/md";
import {
  ContentContainer,
  RightContent,
  RightContentCol1,
  RightContentCol2,
} from "../../../reuseableComponents/containerStyle";
import Sidebar from "../../sidebar";
import {
  ScheduleContainer,
  SelectAvailableTime,
  Time,
  Waitlist,
} from "./scheduleStyle";
import { HeadingStyle } from "../../../reuseableComponents/headingStyle";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { ScrollContainer } from "../../../reuseableComponents/scrollStyle";

function Schedule() {
  // const totalDays = 42;
  // const daysArray = [...Array(array)];
  return (
    <div>
      <ContentContainer>
        <Sidebar />
        <RightContent>
          <RightContentCol1>
            <HeadingStyle>
              <h1>Schedule</h1>
              <Back to="/select-technician">
                <MdChevronLeft />
                Go back
              </Back>
            </HeadingStyle>
            <ScrollContainer>
              <div>
                <ScheduleContainer>
                  <div></div>
                  {
                    <FullCalendar
                      plugins={[dayGridPlugin]}
                      initialView="dayGridMonth"
                      // events={[
                      //   { title: "event 1", date: "2019-04-01" },
                      //   { title: "event 2", date: "2019-04-02" },
                      // ]}
                    />
                  }
                  <Time>
                    <h1>Available Time</h1>
                    <SelectAvailableTime>
                      <input type="checkbox" name="9pm" id="9am" />
                      <label htmlFor="9am">9:00AM</label>
                      <input type="checkbox" name="1pm" id="1pm" />
                      <label htmlFor="1pm">1:00PM</label>
                      <input type="checkbox" name="3pm" id="3pm" />
                      <label htmlFor="3pm">3:00PM</label>
                      <input type="checkbox" name="5pm" id="5pm" />
                      <label htmlFor="5pm">5:00PM</label>
                      <input type="checkbox" name="7pm" id="7pm" />
                      <label htmlFor="7pm">7:00PM</label>
                    </SelectAvailableTime>
                  </Time>
                </ScheduleContainer>
              </div>
            </ScrollContainer>
            <Button to="/enter-details">ADD ANOTHER SERVICES</Button>
            <Waitlist>
              <input type="checkbox" name="waitlist" id="waitlist" />
              <label htmlFor="waitlist"></label>Join our waitlist
            </Waitlist>
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
