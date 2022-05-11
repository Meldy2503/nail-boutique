import React from "react";
import {
  ContentContainer,
  RightContent,
} from "../../reuseableComponents/containerStyle";
import Sidebar from "../sidebar";
import { AboutUsContainer, Row, ImageCol, TextCol } from "./aboutUsStyle";
import { MdChevronLeft } from "react-icons/md";
import { HeadingStyle, Back } from "../../reuseableComponents/headingStyle";
// import { ButtonContainer } from "../../reuseableComponents/buttonStyle";

const AboutUs = () => {
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent display="block">
        <AboutUsContainer>
          <HeadingStyle>
            <h2>About Us</h2>
            <Back to="/">
              <MdChevronLeft />
              Go back
            </Back>
          </HeadingStyle>
          <Row>
            <TextCol></TextCol>
            <ImageCol></ImageCol>
          </Row>
        </AboutUsContainer>
      </RightContent>
    </ContentContainer>
  );
};

export default AboutUs;
