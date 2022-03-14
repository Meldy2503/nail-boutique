import React from "react";
import BookingSummary from "../bookingSummary";
import { Back } from "../../../reuseableComponents/goBack/goBackStyle";
import { Button } from "../../../reuseableComponents/buttonStyle";
import cal from "../../../images/cal.png";
import { MdChevronLeft } from "react-icons/md";
import {
  ContentContainer,
  RightContent,
  RightContentCol1,
  RightContentCol2,
} from "../../../reuseableComponents/containerStyle";
import Sidebar from "../../sidebar";
import { ScheduleContainer, Waitlist } from "./scheduleStyle";
import { HeadingStyle } from "../../../reuseableComponents/headingStyle";

function Schedule() {
  return (
    <div>
      <ContentContainer>
        <Sidebar />
        <RightContent>
          <RightContentCol1>
            <HeadingStyle>
              <h2>Shedule</h2>
              <Back to="/select-services">
                <MdChevronLeft />
                Go back
              </Back>
            </HeadingStyle>
            <ScheduleContainer>
              <img src={cal} alt="calender" />
            </ScheduleContainer>
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
