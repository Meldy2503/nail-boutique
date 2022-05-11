import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
`;

export const BackgroundVideoContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;

  video {
    min-width: 100%;
    min-height: 100%;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
  }
`;

export const Text = styled.div`
  position: fixed;
  bottom: 0;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100%;
  padding: 20% 20px 10px 20px;
`;
