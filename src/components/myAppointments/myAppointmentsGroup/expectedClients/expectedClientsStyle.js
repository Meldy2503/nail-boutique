import styled from "styled-components";

export const ClientsContainer = styled.div``;

export const InputField = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 4rem;

  input {
    width: 100%;
    padding: 1.4rem 1.6rem;
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
