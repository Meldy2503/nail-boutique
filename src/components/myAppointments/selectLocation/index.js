import React from "react";
import { RightContent } from "../../../reuseableComponents/containerStyle";
import locationData from "./selectLocationData";

function SelectLocation() {
  return (
    <RightContent>
      <div>
        <h1>Select Location</h1>
        <h5> Go Back</h5>
      </div>
      <div>
        {locationData.map((data) => (
          <div className="checkboxWrapper" key={data.id}>
            <h4>{data.heading}</h4>
            <p>{data.address}</p>
          </div>
        ))}
      </div>
    </RightContent>
  );
}

export default SelectLocation;
