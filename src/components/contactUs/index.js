import React from "react";
import {
  FormField,
  ContactUsContainer,
  InputField,
  Message,
  ErrorMsg,
  SubmitBtn,
} from "./contactUsStyle";
import { MdChevronLeft } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  ContentContainer,
  RightContent,
} from "../../reuseableComponents/containerStyle";
import Sidebar from "../sidebar";
import { HeadingStyle, Back } from "../../reuseableComponents/headingStyle";
import { ButtonContainer } from "../../reuseableComponents/buttonStyle";
import Alert from "../Alert/Alert";

function ContactUs() {
  const [showAlert, setShowAlert] = React.useState(null);
  const handleShowAlert = (message) => {
    setShowAlert({ msg: message });
    setTimeout(() => {
      setShowAlert(null);
    }, 6000);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Must be 5 characters or more")
        .required("*Required"),
      email: Yup.string()
        .email("Enter a valid email address")
        .required("*Required"),
      phone: Yup.string().required("*Required"),
      subject: Yup.string()
        .min(4, "Must be 20 characters or more")
        .required("*Required"),
      message: Yup.string(),
    }),

    onSubmit: (values, { resetForm }) => {
      resetForm();
      handleShowAlert(
        "Thanks for contacting us, we will get back to you as soon as possible"
      );

      console.log(values);
    },
  });

  return (
    <ContentContainer>
      <Sidebar />
      <RightContent display="block">
        <ContactUsContainer>
          <HeadingStyle data-aos="zoom-in">
            <h2>Contact Us</h2>
            <Back to="/">
              <MdChevronLeft />
              Go back
            </Back>
          </HeadingStyle>
          <FormField onSubmit={formik.handleSubmit} data-aos="zoom-in">
            <InputField>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <ErrorMsg>
                {formik.touched.name && formik.errors.name ? (
                  <p>{formik.errors.name}</p>
                ) : null}
              </ErrorMsg>
            </InputField>
            <InputField>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                type="tel"
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
            <InputField>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                placeholder="Provide context"
                id="subject"
                name="subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <ErrorMsg>
                {formik.touched.subject && formik.errors.subject ? (
                  <p>{formik.errors.subject}</p>
                ) : null}
              </ErrorMsg>
            </InputField>
            <Message>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="2"
                placeholder="Write your question(s) here"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              ></textarea>
            </Message>
            <ButtonContainer>
              <SubmitBtn type="submit" onClick={formik.handleSubmit}>
                SEND MEESSAGE
              </SubmitBtn>
            </ButtonContainer>
          </FormField>
          <Alert display="none" showAlert={showAlert} />
        </ContactUsContainer>
      </RightContent>
    </ContentContainer>
  );
}

export default ContactUs;
