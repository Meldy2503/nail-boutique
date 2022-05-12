import React from "react";
import bgVideo from "../../images/office-video.mp4";
import bgVideoTwo from "../../images/office-video2.webm";
import bgVideoImg from "../../images/office-video-capture.JPG";
import { ButtonS } from "../../reuseableComponents/buttonStyle";
import {
  Container,
  BackgroundVideoContainer,
  TextContainer,
  Text,
  Header,
} from "./homeStyle";

function Home() {
  return (
    <Container>
      <BackgroundVideoContainer>
        <video autoPlay muted loop playsInline poster={bgVideoImg}>
          <source src={bgVideo} type="video/mp4" />
          <source src={bgVideoTwo} type="video/webm" />
          Your browser is not supported!
        </video>
      </BackgroundVideoContainer>
      <TextContainer>
        <Text>
          <h3 data-aos="fade-right">
            <em>Quality Never goes out of Style</em>
          </h3>
          <Header data-aos="zoom-in">
            <h1>
              <span>THE</span> <br />
              <span className="subHeader yellow">NAIL</span>
              <span className="subHeader"> BOUTIQUE</span>
            </h1>
          </Header>
          <p data-aos="fade-left">
            Click the button to book an appointment with us
          </p>
          <ButtonS
            padding="1.3rem 0"
            width="50%"
            fs="1.8rem"
            to="/my-appointments"
          >
            START BOOKING
          </ButtonS>
        </Text>
      </TextContainer>
    </Container>
  );
}

export default Home;
