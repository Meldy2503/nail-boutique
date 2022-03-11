import React from "react";
import {
  ContentContainer,
  RightContent,
} from "../../../reuseableComponents/containerStyle";
import Sidebar from "../../sidebar";
// import { Button } from "../../../reuseableComponents/buttonStyle";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Col1,
  Title,
  ServiceContainer,
  Services,
  ServiceType,
  FormContainer,
  FormContents,
  InputContainer,
} from "./selectServiceStyle";
// import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleDown, FaAngleRight } from "react-icons/fa";
import serviceData from "./selectServiceData";

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
      options: Yup.array()
        .min(1, "select atleast one option")
        .required("Required"),
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
        <Col1>
          <Title>
            <h2>Select Services</h2>
            <div>
              <FaAngleLeft />
              <a href="/select-location">GO BACK</a>
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
                          <label htmlFor="optionA">
                            <h5>Basic Manicure</h5>
                            <p>30 mins · ₦5000</p>
                          </label>
                          {formik.touched.options && formik.errors.options ? (
                            <p className="errors">{formik.errors.options}</p>
                          ) : null}
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
                          <label htmlFor="optionB">
                            <h5>Basic Manicure</h5>
                            <p>30 mins · ₦5000</p>
                          </label>
                          {formik.touched.options && formik.errors.options ? (
                            <p className="errors">{formik.errors.options}</p>
                          ) : null}
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
                          <label htmlFor="optionC">
                            <h5>Basic Manicure</h5>
                            <p>30 mins · ₦5000</p>
                          </label>
                          {formik.touched.options && formik.errors.options ? (
                            <p className="errors">{formik.errors.options}</p>
                          ) : null}
                        </InputContainer>
                      </FormContents>
                    </FormContainer>
                  )}
                </Services>
              );
            })}
          </ServiceContainer>
          {/* <Btn>
            <Button />
          </Btn> */}
        </Col1>
      </RightContent>
    </ContentContainer>
  );
}

export default Booking;
