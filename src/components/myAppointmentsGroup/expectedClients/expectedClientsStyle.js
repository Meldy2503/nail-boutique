import styled from "styled-components";

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
    color: ${({ theme }) => theme.colors.secondary1};

    &:focus {
      border-bottom: 1px solid ${({ theme }) => theme.colors.secondary3};
      outline: none;
      color: ${({ theme }) => theme.colors.secondary1};
      background-color: ${({ theme }) => theme.colors.primary7};
    }
  }
`;
