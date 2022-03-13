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

export const Row3 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow-y: scroll;
  height: 80vh;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.primary7};
  margin: 2rem 0 0 0;
  width: 31.5%;
  border-radius: 1.1rem;
  color: ${({ theme }) => theme.colors.secondary2};

  .top {
    display: flex;
    justify-content: space-between;
    padding: 5% 10% 0 10%;

    img {
      max-width: 100%;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary3};
    color: black;
  }
`;

export const Technician = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 20rem;
  padding: 0 10% 10% 10%;

  img {
    border-radius: 50%;
  }

  div {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    font-style: italic;
    font-weight: 400;
    line-height: 1.2rem;

    .client-icon {
      font-size: 1rem;
    }

    .rating-icon {
      font-size: 1.3rem;
      /* color: ${({ theme }) => theme.colors.tertiary3} !important; */
      color: inherit;
    }

    & > span {
      display: flex;
      align-items: center;
    }
  }

  .row1 {
  }
  .row2 {
    gap: 1rem;
    /* width: 100%; */
  }
`;

export const Select = styled.button`
  background-color: transparent;
  /* color: ${({ theme }) => theme.colors.secondary2}; */
  color: inherit;
  border: 1px solid ${({ theme }) => theme.colors.secondary2};
  padding: 0.5rem 0;
  display: inline-block;
  border-radius: 1rem;
  font-weight: 400;
  font-size: 1.6rem;
  text-align: center;
  width: 10rem;
  cursor: pointer;
  letter-spacing: 0.2rem;
  /* transition: all 5s; */

  &:visited {
    background: linear-gradient(90deg, #e48f04 -1.65%, #f5d061 100%);
  }

  &:hover {
    border: 1px solid transparent;
    color: ${({ theme }) => theme.colors.primary1};
    background: linear-gradient(90deg, #f5d061 -1.65%, #e48f04 100%);
    background-repeat: no-repeat;
  }
`;
export const Row4 = styled.div`
  margin: 2rem 0;
`;
