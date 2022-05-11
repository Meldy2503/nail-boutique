import React from "react";
// import Sidebar from "../sidebar";
import bgVideo from "../../images/office-video.mp4";
import bgVideoTwo from "../../images/office-video2.webm";
import bgVideoImg from "../../images/office-video-capture.JPG";
import { Container, BackgroundVideoContainer, Text } from "./homeStyle";

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
      <Text>
        <h1>heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
          maiores magni voluptatibus dolorum harum ratione!
        </p>
      </Text>
    </Container>
  );
}

export default Home;
