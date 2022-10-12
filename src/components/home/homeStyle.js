import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const BackgroundVideoContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  video {
    min-width: 100%;
    min-height: 100%;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
  }
`;

export const TextContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100%;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f1f1f1;
  text-align: center;
  width: 60%;
  letter-spacing: 0.5rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 75%;
  }

  h3 {
    margin-bottom: 3rem;
    font-family: "Metal", cursive;
    font-size: 2.5rem;
    line-height: 1.4;

    @media (max-width: 600px) {
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }
  }

  h6 {
    margin: 3rem 0;
    font-size: 2rem;

    @media (max-width: 600px) {
      font-size: 1.6rem;
      margin: 2rem 0;
    }
    @media (max-width: 400px) {
      font-size: 1.4rem;
    }
  }
`;
export const Header = styled.div`
  border: 4px solid #fff;
  margin: 0 auto;

  h1 {
    font-size: 4rem;
    font-weight: bolder;
    padding: 2rem 0;
    line-height: 1.4;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      font-size: 3.5rem;
    }

    @media (max-width: 600px) {
      font-size: 2.5rem;
    }
    @media (max-width: 400px) {
      font-size: 2rem;
    }
  }

  .subHeader {
    @media (max-width: 600px) {
      display: block;
    }
  }

  .yellow {
    color: #e48f04;
  }
`;
