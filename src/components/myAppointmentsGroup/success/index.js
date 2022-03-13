import React from "react";
import { Button } from "../../../reuseableComponents/buttonStyle";
import { ContentContainer } from "../../../reuseableComponents/containerStyle";

function Success() {
  return (
    <ContentContainer>
      <h1>Success</h1>
      <Button to="/booking">GO HOME</Button>
    </ContentContainer>
  );
}

export default Success;
