import React from "react";
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

function UpdateProfile() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      comment: "",
      rememberMe: true,
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
        .max(5, "Must be 5 characters or more")
        .required("*Required"),
      rememberMe: Yup.boolean(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <ContentContainer>
      <Sidebar />
      <RightContent display="block">
        <UpdateProfileContainer>
          <HeadingStyle>
            <h2>Update Profile</h2>
            <Back to="/enter-details">
              <MdChevronLeft />
              Go back
            </Back>
          </HeadingStyle>
          <FormField onSubmit={formik.handleSubmit}>
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
              // value={formik.values.rememberMe}
            />
            <ButtonContainer>
              <SubmitBtn
                value="UPDATE PROFILE"
                type="submit"
                onClick={formik.handleSubmit}
              />
              {/* UPDATE PROFILE
              </SubmitBtn> */}
            </ButtonContainer>
          </FormField>
        </UpdateProfileContainer>
      </RightContent>
    </ContentContainer>
  );
}

export default UpdateProfile;
