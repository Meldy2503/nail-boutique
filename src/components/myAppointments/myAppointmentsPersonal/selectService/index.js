import React from "react";
import {
  ContentContainer,
  RightContent,
  RightContentCol1,
  RightContentCol2,
} from "../../../../reuseableComponents/containerStyle";
import Sidebar from "../../../sidebar";
import {
  Button,
  ButtonContainer,
} from "../../../../reuseableComponents/buttonStyle";
import {
  ServiceContainer,
  Services,
  ServiceType,
  FormContainer,
  InputContainer,
} from "./selectServiceStyle";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { MdChevronLeft } from "react-icons/md";
import serviceData from "./selectServiceData";
import BookingSummary from "../bookingSummary";
import {
  HeadingStyle,
  Back,
} from "../../../../reuseableComponents/headingStyle";
import CheckBox from "../../../../reuseableComponents/Checkbox";

function SelectServices() {
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
            <Back to="/my-appointments/personal-booking/select-location">
              <MdChevronLeft />
              Go back
            </Back>
          </HeadingStyle>
          <ServiceContainer>
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
                        <CheckBox value={items.value1} name={items.name} />
                        <label htmlFor={items.value1}>
                          <h5>{items.labelA}</h5>
                          <p>{items.labelB}</p>
                        </label>
                      </InputContainer>

                      <InputContainer>
                        <CheckBox value={items.value2} name={items.name} />
                        <label htmlFor={items.value2}>
                          <h5>{items.labelA}</h5>
                          <p>{items.labelB}</p>
                        </label>
                      </InputContainer>

                      <InputContainer>
                        <CheckBox value={items.value3} name={items.name} />
                        <label htmlFor={items.value3}>
                          <h5>{items.labelA}</h5>
                          <p>{items.labelB}</p>
                        </label>
                      </InputContainer>
                    </FormContainer>
                  )}
                </Services>
              );
            })}
          </ServiceContainer>
          <ButtonContainer paddingm="0.5rem 0">
            <Button to="/my-appointments/personal-booking/select-servicestwo">
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

export default SelectServices;
