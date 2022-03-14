import React from "react";
import BookingSummary from "../bookingSummary";
import { Back } from "../../../reuseableComponents/goBack/goBackStyle";
import { Button } from "../../../reuseableComponents/buttonStyle";
import {
  ContentContainer,
  RightContent,
  RightContentCol1,
  RightContentCol2,
} from "../../../reuseableComponents/containerStyle";
import Sidebar from "../../sidebar";
import { HeadingStyle } from "../../../reuseableComponents/headingStyle";
import { MdChevronLeft } from "react-icons/md";
import {
  EnterDetailsContainer,
  FormField,
  InputField,
  Comment,
  ErrorMsg,
  SubmitBtn,
  RememberMe,
} from "./enterDetailsStyle";
import { useFormik } from "formik";
import * as Yup from "yup";

function EnterDetails() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("*Required"),
      lastName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("*Required"),
      email: Yup.string()
        .email("Invalid Email")
        // .max(15, "Must be 15 characters or less")
        .required("*Required"),
      phone: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("*Required"),
      comment: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("*Required"),
    }),
    onSubmit: (values) => console.log(values),
  });
  console.log(formik.values);
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <RightContentCol1>
          <HeadingStyle>
            <h2>Enter your details</h2>
            <Back to="/schedule">
              <MdChevronLeft />
              Go back
            </Back>
          </HeadingStyle>
          <EnterDetailsContainer>
            <FormField onSubmit={formik.handleSubmit}>
              <span>
                <div className="names">
                  <InputField>
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Enter your First Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                    <ErrorMsg>
                      {formik.touched.firstName && formik.errors.firstName ? (
                        <p>{formik.errors.firstName}</p>
                      ) : null}
                    </ErrorMsg>
                  </InputField>
                  <InputField>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Enter your Last Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                    <ErrorMsg>
                      {formik.touched.lastName && formik.errors.lastName ? (
                        <p>{formik.errors.lastName}</p>
                      ) : null}
                    </ErrorMsg>
                  </InputField>
                </div>
                <InputField>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  <ErrorMsg>
                    {formik.touched.email && formik.errors.email ? (
                      <p>{formik.errors.email}</p>
                    ) : null}
                  </ErrorMsg>
                </InputField>
                <InputField>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter phone number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  <ErrorMsg>
                    {formik.touched.phone && formik.errors.phone ? (
                      <p>{formik.errors.phone}</p>
                    ) : null}
                  </ErrorMsg>
                </InputField>
                <Comment>
                  <label htmlFor="comment">State</label>
                  <textarea
                    name="comment"
                    id="comment"
                    cols="30"
                    rows="1"
                    placeholder="Comments (Optional)"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.comment}
                  ></textarea>
                </Comment>
                <RememberMe>
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember"></label> Remember Me
                </RememberMe>
              </span>
            </FormField>
          </EnterDetailsContainer>
        </RightContentCol1>
        <RightContentCol2>
          <BookingSummary to="/confirm-booking" />
        </RightContentCol2>
      </RightContent>
    </ContentContainer>
  );
}

export default EnterDetails;
