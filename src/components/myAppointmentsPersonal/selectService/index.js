import React from "react";
import {
  ContentContainer,
  RightContent,
  RightContentCol1,
  RightContentCol2,
} from "../../../reuseableComponents/containerStyle";
import Sidebar from "../../sidebar";
import {
  Button,
  ButtonContainer,
} from "../../../reuseableComponents/buttonStyle";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  ServiceContainer,
  Services,
  ServiceType,
  FormContainer,
  FormContents,
  InputContainer,
} from "./selectServiceStyle";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { MdChevronLeft } from "react-icons/md";
import serviceData from "./selectServiceData";
import BookingSummary from "../bookingSummary";
import { Back } from "../../../reuseableComponents/goBack/goBackStyle";
import { HeadingStyle } from "../../../reuseableComponents/headingStyle";
import { ScrollContainer } from "../../../reuseableComponents/scrollStyle";

function SelectServices() {
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
      // .min(1, "select atleast one option")
      // .required("Required"),
      // options: Yup.boolean().oneOf([true], "select atleast one option"),
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
            <Back to="/select-location">
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
                            {/* {formik.touched.options && formik.errors.options ? (
                            <p className="errors">{formik.errors.options}</p>
                          ) : null} */}
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
                            {/* {formik.touched.options && formik.errors.options ? (
                            <p className="errors">{formik.errors.options}</p>
                          ) : null} */}
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
                            {/* {formik.touched.options && formik.errors.options ? (
                            <p className="errors">{formik.errors.options}</p>
                          ) : null} */}
                          </InputContainer>
                        </FormContents>
                      </FormContainer>
                    )}
                  </Services>
                );
              })}
            </ServiceContainer>
          </ScrollContainer>
          <ButtonContainer paddingm="0.5rem 0">
            <Button to="/select-servicestwo">CONTINUE</Button>
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
