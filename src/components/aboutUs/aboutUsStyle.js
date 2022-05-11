import styled from "styled-components";
import NailSalon from "../../images/nail-polish.jpg";

export const AboutUsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 3.5rem;
  height: 90%;
  overflow: auto;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
    padding-top: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  h3,
  h4,
  li {
    text-shadow: 2px 3px #000;
  }
`;
export const TextCol = styled.div`
  background-image: linear-gradient(to left bottom, rgba(0, 0, 0, 0.5), #000),
    url(${NailSalon});
  padding: 1rem 1.5rem;
  color: #e48f04;
  text-align: center;
  letter-spacing: 0.4rem;

  div {
    h3 {
      letter-spacing: 0.6rem;
      font-size: 1.8rem;
    }

    ul {
      display: inline-block;
    }
    li {
      background-color: rgba(0, 0, 0, 0.8);
      margin-top: 0.5rem;
      padding: 0.4rem 1rem;
      border-radius: 1rem;
      font-size: 1.5rem;
    }
  }
`;
export const Contacts = styled.div`
  padding: 1rem 1.5rem 0 1.5rem;
  background-color: #000;
  opacity: 0.7;
  text-align: center;
  color: #f1f1f1;

  div {
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.5rem;
  }
`;
