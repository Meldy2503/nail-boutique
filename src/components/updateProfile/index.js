import React, { useState } from "react";
import {
  FormField,
  UpdateProfileContainer,
  InputField,
  Comment,
  ErrorMsg,
  Names,
  SubmitBtn,
} from "./updateProfileStyle";
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
import CheckBox from "../../reuseableComponents/Checkbox";
import Alert from "../Alert/Alert";

function UpdateProfile() {
  const [showAlert, setShowAlert] = useState(null);
  const handleShowAlert = (message) => {
    setShowAlert({ msg: message });
    setTimeout(() => {
      setShowAlert(null);
    }, 4000);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      comment: "",
      rememberMe: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must not be more than 20 characters")
        .required("*Required"),
      lastName: Yup.string()
        .max(20, "Must not be more than 20 characters")
        .required("*Required"),
      email: Yup.string()
        .email("Enter a valid email address")
        .required("*Required"),
      phone: Yup.string().required("*Required"),
      comment: Yup.string(),
    }),

    onSubmit: (values, { resetForm }) => {
      resetForm();
      handleShowAlert("Profile Updated Successfully");

      console.log(values);
    },
  });

  return (
    <ContentContainer>
      <Sidebar />
      <RightContent display="block">
        <UpdateProfileContainer>
          <HeadingStyle data-aos="zoom-in">
            <h2>Update Profile</h2>
            <Back to="/enter-details">
              <MdChevronLeft />
              Go back
            </Back>
          </HeadingStyle>
          <FormField data-aos="zoom-in" onSubmit={formik.handleSubmit}>
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
              name="rememberMe"
              id="rememberMe"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked
            />
            <ButtonContainer>
              <SubmitBtn type="submit" onClick={formik.handleSubmit}>
                UPDATE PROFILE
              </SubmitBtn>
            </ButtonContainer>
          </FormField>
          <Alert showAlert={showAlert} />
        </UpdateProfileContainer>
      </RightContent>
    </ContentContainer>
  );
}

export default UpdateProfile;
