import React, { useContext } from "react";
import { SummaryContext } from "../../../../summaryContext";
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
import { v4 as uuidv4 } from "uuid";

function SelectServices({ type, id = uuidv4() }) {
  const { updateList } = useContext(SummaryContext);

  const [onClick, setOnClick] = React.useState({});
  const handleToggle = (id) => () => {
    setOnClick((state) => ({
      ...state,
      [id]: !state[id],
    }));
  };
  const handleClick = (services) => {
    updateList({ services });
  };
  // const handleChange = () => {
  //   updateList();
  // };

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
            {serviceData.map((items, id = uuidv4()) => {
              // console.log(id);
              return (
                <Services key={id}>
                  <ServiceType>
                    <div>
                      <h3>{items.title}</h3>
                      <p>{items.text}</p>
                    </div>
                    <span onClick={handleToggle(id)}>
                      {onClick[id] ? <FaAngleRight /> : <FaAngleDown />}
                    </span>
                  </ServiceType>
                  {onClick[id] && (
                    <FormContainer>
                      <InputContainer>
                        <CheckBox
                          onChange={handleClick}
                          value={items.options}
                          label={
                            <div>
                              <h5>{items.options[0].product}</h5>
                              <p>{`${items.options[0].time} mins - ₦${items.options[0].price}`}</p>
                            </div>
                          }
                        />
                      </InputContainer>
                      <InputContainer>
                        <CheckBox
                          onChange={handleClick}
                          value={items.options}
                          name="services"
                          label={
                            <div>
                              <h5>{items.options[1].product}</h5>
                              <p>{`${items.options[1].time} mins - ₦${items.options[1].price}`}</p>
                            </div>
                          }
                        />
                      </InputContainer>
                      <InputContainer>
                        <CheckBox
                          onChange={handleClick}
                          value={items.options}
                          label={
                            <div>
                              <h5>{items.options[2].product}</h5>
                              <p>{`${items.options[2].time} mins - ₦${items.options[2].price}`}</p>
                            </div>
                          }
                        />
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
