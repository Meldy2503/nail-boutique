import styled from "styled-components";

export const UpdateProfileStyled = styled.div``;
export const UpdateProfileContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  padding-top: 3rem;
`;

export const FormField = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  margin-top: 1%;

  .names {
    display: flex;
    flex-direction: row;
    gap: 1.6rem;
  }
`;

export const InputField = styled.div`
  width: 100%;
  height: 8rem;
  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 1.2rem;
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

    &:focus {
      border-bottom: 1px solid ${({ theme }) => theme.colors.secondary3};
      outline: none;
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
    font-size: 1.2rem;
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
  }
`;

export const Row1 = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.8rem;
  }
`;

export const SubmitBtn = styled.button`
  color: #000000;
  background: linear-gradient(90deg, #f5d061 -1.65%, #e48f04 100%);
  padding: 1rem 26%;
  border-radius: 1rem;
  font-weight: 400;
  font-size: 1.6rem;
  text-align: center;
  border: none;
`;

export const RememberMe = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  input {
    margin-right: 1rem;
    border: 0.5px solid ${({ theme }) => theme.colors.tertiary2};
    accent-color: ${({ theme }) => theme.colors.tertiary2};
    background-color: #000;
  }
`;
