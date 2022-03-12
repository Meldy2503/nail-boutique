import styled from "styled-components";

export const Col1 = styled.div`
  padding: 4rem;
  width: 70%;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 3rem;
    font-weight: 500;
  }

  div {
    display: flex;
    color: #676767;
    align-items: center;
    font-size: 2rem;
  }

  a {
    color: #525252;
    margin-left: 1rem;
    font-size: 1.4rem;
  }
`;

export const Services = styled.div`
  /* border: 0.5px solid #555555; */
  margin-bottom: 2rem;
`;

export const ServiceType = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.5px solid #555555;
  border-radius: 1rem;
  padding: 1rem 5rem;

  div {
    h3 {
      font-size: 2rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.secondary2};
    }

    p {
      color: #737373;
      font-size: 1.6rem;
    }
  }

  span {
    color: #676767;
    font-size: 3.5rem;
    font-weight: 100;
  }
`;

export const ServiceContainer = styled.form``;

export const FormContainer = styled.form``;

export const FormContents = styled.div``;

export const InputContainer = styled.div``;

export const Btn = styled.div``;
/* @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
  
 }
 @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
   
 }
 color: ${({ theme }) => theme.colors.secondary5}; */
