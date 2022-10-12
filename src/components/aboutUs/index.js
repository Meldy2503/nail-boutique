import React from "react";
import {
  ContentContainer,
  RightContent,
} from "../../reuseableComponents/containerStyle";
import Sidebar from "../sidebar";
import { AboutUsContainer, Content, TextCol, Contacts } from "./aboutUsStyle";
import { MdChevronLeft } from "react-icons/md";
import { HeadingStyle, Back } from "../../reuseableComponents/headingStyle";
import { Button, ButtonContainer } from "../../reuseableComponents/buttonStyle";

const AboutUs = () => {
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent display="block">
        <AboutUsContainer>
          <HeadingStyle mPdLe="1.5rem" mPdRi="1.5rem" data-aos="zoom-in">
            <h2>About Us</h2>
            <Back to="/">
              <MdChevronLeft />
              Go back
            </Back>
          </HeadingStyle>
          <Content data-aos="zoom-in">
            <TextCol>
              <div>
                <h3>OUR SERVICES:</h3>
                <ul>
                  <li>Hair Styling</li>
                  <li>Nail Services</li>
                  <li>Eyelash extensions</li>
                  <li>skin treatment</li>
                  <li>Waxing</li>
                  <li>Make up</li>
                </ul>
              </div>
            </TextCol>

            <Contacts>
              <div>
                <h4>Contact us:</h4>
                <p>08037588098</p>
                <p>emelder.charles25@gmail.com</p>
              </div>
              <div>
                <h4>Visit us at:</h4>
                <p>7 - 12 Rumens Road,Ikoyi, Lagos</p>
                <p>
                  Raybok Mall, 5 Prince Adelowo Adedeji Street, Lekki Phase 1,
                  Lagos
                </p>
              </div>
            </Contacts>
          </Content>
          <ButtonContainer>
            <Button to="/contact-us">CONTACT US</Button>
          </ButtonContainer>
        </AboutUsContainer>
      </RightContent>
    </ContentContainer>
  );
};

export default AboutUs;
