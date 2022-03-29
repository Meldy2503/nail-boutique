import React from "react";
import {
  ContentContainer,
  RightContent,
  RightContentCol1,
  RightContentCol2,
} from "../../../../reuseableComponents/containerStyle";
import Sidebar from "../../../sidebar";
import { MdChevronLeft } from "react-icons/md";
import {
  Button,
  ButtonContainer,
} from "../../../../reuseableComponents/buttonStyle";
import {
  Services,
  ServiceType,
  FormContainer,
  InputContainer,
} from "./selectServiceTwoStyle";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import serviceData from "./data";
import BookingSummary from "../bookingSummary";
import {
  HeadingStyle,
  Back,
} from "../../../../reuseableComponents/headingStyle";
import CheckBox from "../../../../reuseableComponents/Checkbox";

function SelectServiceTwo() {
  const [onClick, setOnClick] = React.useState({});
  const handleClick = (index) => () => {
    setOnClick((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };

  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <RightContentCol1>
          <HeadingStyle>
            <h2>Select Services</h2>
            <Back to="/my-appointments/group-booking/select-services">
              <MdChevronLeft />
              Go back
            </Back>
          </HeadingStyle>
          {serviceData.map((items, index) => {
            return (
              <Services key={items.id}>
                <ServiceType>
                  <div>
                    <h3>{items.title}</h3>
                    <p>{items.text}</p>
                  </div>
                  <span onClick={handleClick(index)}>
                    {onClick[index] ? <FaAngleRight /> : <FaAngleDown />}
                  </span>
                </ServiceType>
                {onClick[index] && (
                  <FormContainer>
                    <InputContainer>
                      <CheckBox value={items.value1} name={items.name}
                      label={
                        <div>
                          <h5>{items.labelA}</h5>
                          <p>{items.labelB}</p>
                        </div>
                      }
                      />
                    </InputContainer>

                    <InputContainer>
                      <CheckBox value={items.value2} name={items.name}
                      label={
                        <div>
                          <h5>{items.labelA}</h5>
                          <p>{items.labelB}</p>
                        </div>
                      } />
                    </InputContainer>

                    <InputContainer>
                      <CheckBox value={items.value3} name={items.name}
                      label={
                        <div>
                          <h5>{items.labelA}</h5>
                          <p>{items.labelB}</p>
                        </div>
                      } />
                      
                    </InputContainer>
                  </FormContainer>
                )}
              </Services>
            );
          })}
          <ButtonContainer>
            <Button to="/my-appointments/group-booking/expected-clients">
              CONTINUE
            </Button>
          </ButtonContainer>
        </RightContentCol1>
        <RightContentCol2>
          <BookingSummary />
        </RightContentCol2>
      </RightContent>
    </ContentContainer>
  );
}

export default SelectServiceTwo;
