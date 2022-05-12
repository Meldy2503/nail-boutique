import React from "react";
import BookingSummary from "../bookingSummary";
import {
  Button,
  ButtonContainer,
} from "../../../../reuseableComponents/buttonStyle";
import {
  ContentContainer,
  RightContent,
  RightContentCol1,
  RightContentCol2,
} from "../../../../reuseableComponents/containerStyle";
import Sidebar from "../../../sidebar";
import {
  HeadingStyle,
  Back,
} from "../../../../reuseableComponents/headingStyle";
import { MdChevronLeft } from "react-icons/md";
import {
  EnterDetailsContainer,
  FormField,
  InputField,
  Comment,
  ErrorMsg,
  Names,
  Policy,
} from "./enterDetailsStyle";
import { useFormik } from "formik";
import * as Yup from "yup";
import CheckBox from "../../../../reuseableComponents/Checkbox";

function EnterDetails({ label }) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      comment: "",
      remember: true,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("*Required"),
      lastName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("*Required"),
      email: Yup.string().email("Invalid Email").required("*Required"),
      phone: Yup.string()
        .max(11, "Must be 11 characters")
        .required("*Required"),
      comment: Yup.string()
        .max(4, "Must be 4 characters or more")
        .required("*Required"),
      remember: Yup.boolean(),
      // remember: Yup.boolean().oneOf([true]),

      // rememberMe: Yup.boolean()
      //   .oneOf([true], "Accept the terms and conditions")
      //   .required("*Required"),
    }),
    onSubmit: (values) => console.log(values),
  });
  console.log(formik.values);
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <RightContentCol1>
          <HeadingStyle data-aos="zoom-in">
            <h2>Enter your details</h2>
            <Back to="/my-appointments/personal-booking/schedule">
              <MdChevronLeft />
              Go back
            </Back>
          </HeadingStyle>
          <EnterDetailsContainer>
            <FormField onSubmit={formik.handleSubmit} data-aos="zoom-in">
              <Names>
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
              </Names>
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
              <CheckBox
                label="Remember Me"
                name="remember"
                id="remember"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </FormField>
            <Policy>
              <h2>Company Policy</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus
              </p>
            </Policy>
          </EnterDetailsContainer>
          <ButtonContainer>
            <Button to="/my-appointments/personal-booking/confirm-booking">
              NEXT
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

export default EnterDetails;
