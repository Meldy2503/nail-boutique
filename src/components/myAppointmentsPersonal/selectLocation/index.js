import React, { useState } from "react";
import locationData from "./selectLocationData";
import Map from "../../../images/map.png";
import { MdChevronLeft } from "react-icons/md";
import {
  Content,
  Contents,
  MapImg,
  Location,
  RightContent,
} from "./selectLocationStyle";
import { ContentContainer } from "../../../reuseableComponents/containerStyle";
import Sidebar from "../../sidebar";
import { Back } from "../../../reuseableComponents/goBackStyle";
import {
  Button,
  ButtonContainer,
} from "../../../reuseableComponents/buttonStyle";
import {
  animated,
  useSpring,
  config,
  useChain,
  useSpringRef,
} from "react-spring";
import { HeadingStyle } from "../../../reuseableComponents/headingStyle";

function SelectLocation() {
  const [isChecked, setIsChecked] = useState({
    location: [],
  });
  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const checkboxAnimationRef = useSpringRef();
  const checkboxAnimationStyle = useSpring({
    backgroundColor: isChecked ? "#271602" : "#1C1C1C",
    borderColor: isChecked ? "#B57224" : "#696969",
    config: config.gentle,
    ref: checkboxAnimationRef,
  });

  const [checkmarkLength, setCheckmarkLength] = useState(null);
  const checkmarkAnimationRef = useSpringRef();
  const checkmarkAnimationStyle = useSpring({
    x: isChecked ? 0 : checkmarkLength,
    config: config.gentle,
    ref: checkmarkAnimationRef,
  });

  useChain(
    isChecked
      ? [checkboxAnimationRef, checkmarkAnimationRef]
      : [checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.1]
  );

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
              <Contents>
                <h4>{data.heading}</h4>
                <p>{data.address}</p>
              </Contents>

              <label>
                <input
                  size={180}
                  type="checkbox"
                  onChange={handleChange}
                  checked={isChecked}
                  id="istLocation"
                  name="location"
                  value="istLocation"
                />

                <input
                  size={180}
                  type="checkbox"
                  onChange={handleChange}
                  checked={isChecked}
                  id="secondLocation"
                  name="location"
                  value="secondLocation"
                />

                <animated.svg
                  style={checkboxAnimationStyle}
                  className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
                  aria-hidden="true"
                  viewBox="0 0 15 11"
                  fill="none"
                >
                  <animated.path
                    d="M1 4.5L5 9L13 1"
                    strokeWidth="1"
                    stroke={isChecked ? "#B57224" : "none"}
                    strokeDasharray={checkmarkLength}
                    strokeDashoffset={checkmarkAnimationStyle.x}
                    ref={(ref) => {
                      if (ref) {
                        setCheckmarkLength(ref.getTotalLength());
                      }
                    }}
                  />
                </animated.svg>
              </label>
            </Content>
          ))}
          <ButtonContainer>
            <Button to="/select-services">CONTINUE</Button>
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
