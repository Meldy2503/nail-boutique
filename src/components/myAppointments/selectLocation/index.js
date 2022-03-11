import React, { useState } from "react";
import locationData from "./selectLocationData";
import Map from "../../../images/map.png";
import {
  Col1,
  Col2,
  Column,
  Content,
  Contents,
  LocationHeader,
} from "./selectLocationStyle";

function SelectLocation() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Column>
      <Col1>
        <LocationHeader>
          <h1>Select Location</h1>
          <h5> Go Back</h5>
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
      </Col1>
      <Col2>
        <img src={Map} alt="location" />
      </Col2>
    </Column>
  );
}

export default SelectLocation;
