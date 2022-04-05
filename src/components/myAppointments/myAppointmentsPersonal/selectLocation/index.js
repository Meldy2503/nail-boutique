import React, { useContext } from "react";
import { SummaryContext } from "../../../../summaryContext";
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
  const { updateList } = useContext(SummaryContext);
  const handleClick = (location) => {
    updateList({ location });
  };
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
              <CheckBox
                onChange={() => handleClick(data)}
                value={data}
                name="location"
              />
            </Content>
          ))}
          <ButtonContainer>
            <Button to="/my-appointments/personal-booking/select-services">
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
