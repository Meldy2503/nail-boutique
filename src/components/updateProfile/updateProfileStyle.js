import styled from "styled-components";

export const UpdateProfileContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  padding-top: 3rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }
`;

export const FormField = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 20%;
  position: relative;
  height: 90%;
  overflow: auto;
  scrollbar-width: thin;
  scroll-padding-right: 5rem;

  &::-webkit-scrollbar {
    width: 0.3rem;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.primary2};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary5};
    border-radius: 2rem;
    border-top: 4rem solid transparent;
    border-bottom: 4rem solid transparent;
    background-clip: padding-box;

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      border-top: 12rem solid transparent;
      border-bottom: 0rem solid transparent;
      height: 95%;
    }
  }

  & > span {
    display: block;
    height: 60vh;
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
    font-size: 1.2rem;
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
  border-radius: 0.6rem;
  font-weight: 400;
  font-size: 1.6rem;
  text-align: center;
  border: none;
  width: 100%;
  z-index: 1500;
  position: sticky;
  bottom: 0;
  right: 0;
  left: 0;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin: 0 auto;
    font-size: 1.5rem;
    width: 86%;
    position: fixed;
    bottom: 2.7rem;
    right: 0;
    left: 0;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 1.2rem;
  }
`;

export const RememberMe = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 1.4rem;

  input {
    margin-right: 1rem;
    border: 0.5px solid ${({ theme }) => theme.colors.tertiary2};
    accent-color: ${({ theme }) => theme.colors.tertiary2};
    background-color: #000;
  }
`;
