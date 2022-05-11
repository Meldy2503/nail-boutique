import React, { useContext } from "react";
import { SummaryContext } from "../../../../summaryContext";
import locationData from "./selectLocationData";
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
import RadioButton from "../../../../reuseableComponents/RadioButton";

function SelectLocation() {
  const { updateList } = useContext(SummaryContext);
  const handleGroupLocation = (location) => {
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
              <RadioButton
                checkHeight="1.5rem"
                checkWidth="0.8rem"
                width="3rem"
                height="3rem"
                onChange={() => handleGroupLocation(data)}
                label={
                  <LocationText>
                    <h4>{data.heading}</h4>
                    <p>{data.address}</p>
                  </LocationText>
                }
                flexDirection="row"
                value={data}
                name="location"
              />
            </Content>
          ))}
          <ButtonContainer>
            <Button to="/my-appointments/group-booking/select-services">
              CONTINUE
            </Button>
          </ButtonContainer>
        </Location>

        <MapImg>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=18tNhSgJZKpyLpEvZ7myyMEFLlqfj0xfw&ehbc=2E312F"
            width="100%"
            height="100%"
            title="googleMap"
          ></iframe>
        </MapImg>
      </RightContent>
    </ContentContainer>
  );
}

export default SelectLocation;
