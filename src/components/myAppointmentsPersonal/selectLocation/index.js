import React, { useState } from "react";
import locationData from "./selectLocationData";
import Map from "../../../images/map.png";
import { MdChevronLeft } from "react-icons/md";
import { Content, Contents, MapImg } from "./selectLocationStyle";
import {
  ContentContainer,
  RightContent,
  RightContentCol1,
  RightContentCol2,
} from "../../../reuseableComponents/containerStyle";
import Sidebar from "../../sidebar";
import { Back } from "../../../reuseableComponents/goBack/goBackStyle";
import { Button } from "../../../reuseableComponents/buttonStyle";
import {
  animated,
  useSpring,
  config,
  useChain,
  useSpringRef,
} from "react-spring";
import { ScrollContainer } from "../../../reuseableComponents/scrollStyle";
import { HeadingStyle } from "../../../reuseableComponents/headingStyle";

function SelectLocation() {
  const [isChecked, setIsChecked] = useState(false);
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
      <RightContent alitm="column-reverse">
        <RightContentCol1>
          <HeadingStyle>
            <h2>Select Location</h2>
            <Back to="/booking">
              <MdChevronLeft />
              Go back
            </Back>
          </HeadingStyle>
          <ScrollContainer height="55%">
            <div>
              {locationData.map((data) => (
                <Content key={data.id}>
                  <Contents>
                    <h4>{data.heading}</h4>
                    <p>{data.address}</p>
                  </Contents>

                  <label>
                    <input
                      size={150}
                      type="checkbox"
                      onChange={() => {
                        setIsChecked(!isChecked);
                      }}
                    />
                    <animated.svg
                      style={checkboxAnimationStyle}
                      className={`checkbox ${
                        isChecked ? "checkbox--active" : ""
                      }`}
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
            </div>
          </ScrollContainer>
          <Button to="/select-services" padding="1rem 40%">
            CONTINUE
          </Button>
        </RightContentCol1>
        <RightContentCol2 display="block">
          <MapImg>
            <img src={Map} alt="location" />
          </MapImg>
        </RightContentCol2>
      </RightContent>
    </ContentContainer>
  );
}

export default SelectLocation;
