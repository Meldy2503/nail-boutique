import React, { useState } from "react";
import locationData from "./selectLocationData";
import Map from "../../../images/map.png";
import { MdChevronLeft } from "react-icons/md";
import {
  Col1,
  Col2,
  Column,
  Content,
  Contents,
  LocationHeader,
} from "./selectLocationStyle";
import {
  ContentContainer,
  RightContent,
} from "../../../reuseableComponents/containerStyle";
import Sidebar from "../../sidebar";
import { Back } from "../../../reuseableComponents/goBack/goBackStyle";
import { Button } from "../../../reuseableComponents/buttonStyle";

function SelectLocation() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <Column>
          <Col1>
            <LocationHeader>
              <h1>Select Location</h1>
              <Back to="/booking">
                <MdChevronLeft />
                Go back
              </Back>
            </LocationHeader>
            {locationData.map((data) => (
              <Content key={data.id}>
                <Contents>
                  <h4>{data.heading}</h4>
                  <p>{data.address}</p>
                </Contents>
                <input
                  size={200}
                  type="checkbox"
                  onChange={() => {
                    setIsChecked(!isChecked);
                  }}
                />
                <span
                  className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
                  aria-hidden="true"
                />
              </Content>
            ))}
            <Button to="/select-services" padding="1rem 40%">
              CONTINUE
            </Button>
          </Col1>
          <Col2>
            <img src={Map} alt="location" />
          </Col2>
        </Column>
      </RightContent>
    </ContentContainer>
  );
}

export default SelectLocation;
