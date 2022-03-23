import styled from "styled-components";

export const Services = styled.div`
  border: 0.5px solid #555555;
  margin-bottom: 2rem;
  border-radius: 1rem;
`;

export const ServiceType = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  div {
    width: 85%;
    h3 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 0.2rem;
      color: ${({ theme }) => theme.colors.secondary2};

      @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
        font-size: 1.8rem;
      }

      @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        font-size: 1.6rem;
      }

      @media (max-width: 410px) {
        font-size: 1.5rem;
      }
    }

    p {
      color: #737373;
      font-size: 1.5rem;

      @media (max-width: 410px) {
        font-size: 1.4rem;
      }
    }
  }

  span {
    color: #676767;
    font-size: 2.5re;
  }
`;

export const ServiceContainer = styled.div`
  margin-bottom: 3rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin-bottom: 5rem;
  }
`;

export const FormContainer = styled.div`
  border-top: 0.5px solid #555555;
  padding-bottom: 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  color: #aeaeae;
  padding: 0.7rem 2rem 0 0.5rem;
  cursor: pointer;
  user-select: none;

  label {
    margin-left: 1.5rem;
    h5 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.1rem;
    }

    p {
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
`;
