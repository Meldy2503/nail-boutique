import styled from "styled-components";

export const EnterDetailsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 1.5rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
`;

export const FormField = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  margin-bottom: 7%;
  position: relative;
  

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    overflow: visible;
    height: fit-content;
  }
 

  .names {
    display: flex;
    flex-direction: row;
    gap: 1.6rem;

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      flex-direction: column;
      gap: 0rem;
    }
  }
`;

export const InputField = styled.div`
  width: 100%;
  height: 8rem;
  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8rem;
  }
  input {
    width: 100%;
    padding: 1rem 1.6rem;
    background-color: ${({ theme }) => theme.colors.primary7};
    border: none;
    border-radius: 0.4rem;
    color: ${({ theme }) => theme.colors.secondary1};

    &:focus {
      border-bottom: 1px solid ${({ theme }) => theme.colors.secondary3};
      outline: none;
      color: ${({ theme }) => theme.colors.secondary1};
      background-color: ${({ theme }) => theme.colors.primary7};
    }
  }
`;

export const ErrorMsg = styled.div`
  p {
    color: red;
    font-size: 1.2rem;
  }
`;

export const Comment = styled.div`
  height: 8rem;
  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8rem;
  }

  textarea {
    width: 100%;
    padding: 1rem 1.6rem;
    background-color: ${({ theme }) => theme.colors.primary7};
    border: none;
    border-radius: 0.4rem;
    font-family: Poppins;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.1rem;
    letter-spacing: 0em;
    text-align: left;
    color: ${({ theme }) => theme.colors.secondary1};

    &:focus {
      border-bottom: 1px solid ${({ theme }) => theme.colors.secondary3};
      outline: none;
      color: ${({ theme }) => theme.colors.secondary1};
      background-color: ${({ theme }) => theme.colors.primary7};
    }
  }
`;

export const SubmitBtn = styled.button`
  color: #000000;
  background: linear-gradient(90deg, #f5d061 -1.65%, #e48f04 100%);
  padding: 1rem 0;
  border-radius: 1rem;
  font-weight: 400;
  font-size: 1.6rem;
  text-align: center;
  border: none;
  width: 100%;
`;

export const RememberMe = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 1.5rem input {
    margin-right: 1rem;
    border: 0.5px solid ${({ theme }) => theme.colors.tertiary2};
    accent-color: ${({ theme }) => theme.colors.tertiary2};
    background-color: #000;
  }
`;

export const Policy = styled.div`
  margin-bottom: 4rem;
  border-top: 1px solid ${({ theme }) => theme.colors.primary5};
  padding-top: 4rem;


  h2 {
    margin-bottom: 0.6rem;
    font-size: 2rem;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      font-size: 1.9rem;
    }

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.6rem;
    line-height: 1.7;

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 1.5rem;
    }
  }
`;
