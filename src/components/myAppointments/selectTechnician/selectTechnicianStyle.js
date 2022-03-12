import styled from "styled-components";

export const TechnicianContainer = styled.div``;
export const Row2 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.2rem;
  margin-top: 2rem;
`;
export const Search = styled.div`
  width: 100%;
  position: relative;

  input {
    width: 100%;
    padding: 1rem 1.6rem;
    background-color: ${({ theme }) => theme.colors.primary7};
    border: 1px solid ${({ theme }) => theme.colors.primary6};
    border-radius: 0.4rem;
    color: ${({ theme }) => theme.colors.secondary1};

    &:focus {
      border-bottom: 1px solid ${({ theme }) => theme.colors.secondary3};
      outline: none;
      color: ${({ theme }) => theme.colors.secondary1};
      background-color: ${({ theme }) => theme.colors.primary7};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.primary6};
    }
  }

  .search-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    color: ${({ theme }) => theme.colors.primary6};
  }
`;
export const Orientation = styled.div`
  display: flex;
  gap: 1rem;
`;
export const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary6};

  .grid {
    color: ${({ theme }) => theme.colors.secondary2};
    margin: 0 1rem;
    font-size: 3rem;
  }
`;
export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary6};

  .list {
    color: ${({ theme }) => theme.colors.secondary2};
    margin: 0 1rem;
    font-size: 3rem;
  }
`;
export const Row3 = styled.div``;
export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.primary7};
  margin: 2rem 0;
  width: 30%;
  border-radius: 1.1rem;
`;
export const Technician = styled.div`
  /* width: 30%; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Select = styled.button`
  color: ${({ theme }) => theme.colors.primary1};
  background: linear-gradient(90deg, #f5d061 -1.65%, #e48f04 100%);
  border: none;
  padding: 1rem 0;
  display: inline-block;
  border-radius: 1rem;
  font-weight: 400;
  font-size: 1.8rem;
  text-align: center;
  width: 60%;
  cursor: pointer;
  transition: all 5s;

  &:hover {
    background: linear-gradient(90deg, #e48f04 -1.65%, #f5d061 100%);
  }
`;
