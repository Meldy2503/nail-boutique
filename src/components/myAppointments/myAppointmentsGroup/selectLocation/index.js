import React, { useState } from "react";
import locationData from "./selectLocationData";
import Map from "../../../../images/map.png";
import { MdChevronLeft } from "react-icons/md";
import {
  Content,
  LocationText,
  MapImg,
  Location,
  RightContent,
} from "./selectLocationStyle";
import { ContentContainer } from "../../../../reuseableComponents/containerStyle";
import Sidebar from "../../../sidebar";
import {
  Button,
  ButtonContainer,
} from "../../../../reuseableComponents/buttonStyle";
import {
  HeadingStyle,
  Back,
} from "../../../../reuseableComponents/headingStyle";
import CheckBox from "../../../../reuseableComponents/Checkbox";

function SelectLocation() {
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <Location>
          <HeadingStyle mPdTop="0">
            <h2>Select Location</h2>
            <Back to="/my-appointments">
              <MdChevronLeft />
              Go back
            </Back>
          </HeadingStyle>

          {locationData.map((data) => (
            <Content key={data.id}>
              <LocationText>
                <h4>{data.heading}</h4>
                <p>{data.address}</p>
              </LocationText>
              <CheckBox value={data.checkboxValue} name="location" />
            </Content>
          ))}
          <ButtonContainer>
            <Button to="/my-appointments/group-booking/select-services">
              CONTINUE
            </Button>
          </ButtonContainer>
        </Location>

        <MapImg>
          <img src={Map} alt="location" />
        </MapImg>
      </RightContent>
    </ContentContainer>
  );
}

export default SelectLocation;
