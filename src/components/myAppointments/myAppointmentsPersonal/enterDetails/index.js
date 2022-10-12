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
                CANCELLATION POLICY: <br /> Cancellations are allowed up to 24
                hours in advance. <br /> <br /> NO-CASH POLICY <br /> We no
                longer take cash as a form of payment. Kindly make payment for
                your service via POS or Transfers only. <br /> <br /> ARRIVAL
                POLICY:
                <br /> We operate an appointment only service. Please arrive at
                least 10 mins early for your scheduled appointment. Please note
                that we provide a 15 mins grace period for appointment times.
                Should you arrive any time after this we may not be able to
                guarantee a service. <br /> <br /> GROUP BOOKING POLICY: <br />{" "}
                For any bookings of 3 people or more (classified as a Group
                booking) we will require a non- refundable booking fee to be
                transferred before the booking is confirmed. This fee is N5k per
                person and will be deducted from the final bill once services
                are rendered. The deposit will be forfeited for any no shows
                (per person) for the date and time of the Group booking. <br />{" "}
                <br />
                KIDS POLICY: <br /> We are currently able to serve children of 7
                to 15 years. Any children younger than this will unfortunately
                not be attended to.
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
