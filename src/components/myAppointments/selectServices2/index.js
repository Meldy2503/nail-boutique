import React from "react";
import {
  ContentContainer,
  RightContent,
  RightContentCol1,
  RightContentCol2,
} from "../../../reuseableComponents/containerStyle";
import Sidebar from "../../sidebar";
import { Button } from "../../../reuseableComponents/buttonStyle";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Title,
  ServiceContainer,
  Services,
  ServiceType,
  FormContainer,
  FormContents,
  InputContainer,
  Btn,
} from "./selectServiceStyle";
import { FaAngleLeft, FaAngleDown, FaAngleRight } from "react-icons/fa";
import serviceData from "./data";
import BookingSummary from "../bookingSummary";

function Booking() {
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
          <Title>
            <h2>Select Services Two</h2>
            <div>
              <FaAngleLeft />
              <a href="/select-services">GO BACK</a>
            </div>
          </Title>
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
            <Btn>
              <Button to="/confirm">Continue</Button>
            </Btn>
          </ServiceContainer>
        </RightContentCol1>
        <RightContentCol2>
          <BookingSummary />
        </RightContentCol2>
      </RightContent>
    </ContentContainer>
  );
}

export default Booking;
