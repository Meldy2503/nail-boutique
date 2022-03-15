import React from "react";
import {
  ContentContainer,
  RightContent,
  RightContentCol1,
  RightContentCol2,
} from "../../../reuseableComponents/containerStyle";
import Sidebar from "../../sidebar";
import { MdChevronLeft } from "react-icons/md";
import { Button } from "../../../reuseableComponents/buttonStyle";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  ServiceContainer,
  Services,
  ServiceType,
  FormContainer,
  FormContents,
  InputContainer,
  Btn,
} from "./selectServiceTwoStyle";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import serviceData from "./data";
import BookingSummary from "../bookingSummary";
import { Back } from "../../../reuseableComponents/goBack/goBackStyle";
import { HeadingStyle } from "../../../reuseableComponents/headingStyle";
import { ScrollContainer } from "../../../reuseableComponents/scrollStyle";

function SelectServiceTwo() {
  const [onClick, setOnClick] = React.useState({});
  const handleClick = (index) => () => {
    setOnClick((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };

  const formik = useFormik({
    initialValues: {
      options: [],
    },
    validationSchema: Yup.object({
      options: Yup.array(),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <RightContentCol1>
          <HeadingStyle>
            <h2>Select Services</h2>
            <Back to="/select-services">
              <MdChevronLeft />
              Go back
            </Back>
          </HeadingStyle>
          <ScrollContainer>
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
                      <FormContainer onSubmit={formik.handleSubmit}>
                        <FormContents>
                          <InputContainer>
                            <input
                              type="checkbox"
                              id="optionA"
                              name="options"
                              value={formik.values.options}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            <span></span>
                            <label htmlFor="optionA">
                              <h5>Basic Manicure</h5>
                              <p>30 mins - ₦5000</p>
                            </label>
                          </InputContainer>

                          <InputContainer>
                            <input
                              type="checkbox"
                              id="optionB"
                              name="options"
                              value={formik.values.options}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            <span></span>
                            <label htmlFor="optionB">
                              <h5>Basic Manicure</h5>
                              <p>30 mins - ₦5000</p>
                            </label>
                          </InputContainer>

                          <InputContainer>
                            <input
                              type="checkbox"
                              id="optionC"
                              name="options"
                              value={formik.values.options}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            <span></span>
                            <label htmlFor="optionC">
                              <h5>Basic Manicure</h5>
                              <p>30 mins - ₦5000</p>
                            </label>
                          </InputContainer>
                        </FormContents>
                      </FormContainer>
                    )}
                  </Services>
                );
              })}
            </ServiceContainer>
          </ScrollContainer>
          <Btn>
            <Button to="/select-technician">CONTINUE</Button>
          </Btn>
        </RightContentCol1>
        <RightContentCol2>
          <BookingSummary />
        </RightContentCol2>
      </RightContent>
    </ContentContainer>
  );
}

export default SelectServiceTwo;
