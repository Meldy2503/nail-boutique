import styled from "styled-components";

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: sticky;
  top: 0;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.primary2};
`;

export const Row2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.primary2};
  padding-bottom: 2rem;
  padding-top: 1rem;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    top: 8rem;
    height: 4rem;
  }
`;
export const Search = styled.div`
  width: 85%;
  position: relative;

  input {
    width: 95%;
    position: relative;
    padding: 0.9rem 1.6rem;
    background-color: #1c1c1c;
    border: 1px solid ${({ theme }) => theme.colors.primary6};
    border-radius: 0.4rem;
    color: ${({ theme }) => theme.colors.secondary1};

    @media (max-width: 400px) {
      padding: 0.6rem 1.1rem;
    }

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
    right: 8%;
    top: 1rem;
    color: ${({ theme }) => theme.colors.primary6};

    @media (max-width: 400px) {
      top: 0.7rem;
    }
  }
`;

export const Orientation = styled.div`
  display: flex;
  width: 15%;
  height: 3rem;
  justify-content: center;

  @media (max-width: 400px) {
    margin-right: 1rem;
    height: 2.5rem;
  }

  .toggle-selected {
    background-color: #373737;
    border-radius: 0.4rem;
  }
  .orientation-icon-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .toggle-icon {
      color: ${({ theme }) => theme.colors.secondary2};
      width: 3.5rem;
      font-size: 2rem;
      cursor: pointer;

      @media (max-width: 400px) {
        font-size: 1.6rem;
        width: 3rem;
      }
    }
  }
`;

export const Row3 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin-bottom: 3rem;
  }

  .grid {
    background-color: ${({ theme }) => theme.colors.primary7};
    margin: 0.5rem 0 2rem 0;
    padding: 2.5rem 1.5rem;
    width: 31.5%;
    border-radius: 1.1rem;
    color: ${({ theme }) => theme.colors.secondary2};

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary3};
      color: #000;
    }

    @media (max-width: 1200px) {
      width: 47%;
    }

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      width: 43%;
      margin: 1rem auto;
    }

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      width: 31%;
    }

    @media (max-width: 650px) {
      width: 45%;
    }

    @media (max-width: 450px) {
      width: 85%;
    }

    .top {
      display: flex;
      justify-content: space-between;
      padding: 1rem 0;
      img {
        max-width: 100%;
      }
    }

    .grid-technician {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin: 0 auto;

      img {
        border-radius: 50%;
        height: 4rem;
        width: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      h4 {
        margin-top: 0.7rem;
        font-size: 1.3rem;
        font-weight: 600;
      }

      p {
        margin: 0.1rem 0 1rem 0;
        font-size: 0.8rem;
        font-weight: 400;
        font-style: italic;
      }

      .details {
        text-align: center;
      }

      .client-rating {
        display: flex;
        margin-bottom: 0.7rem;
        align-items: center;
        justify-content: center;
        width: 90%;

        &:hover {
          background-color: ${({ theme }) => theme.colors.secondary3};
          color: #000;
        }

        span {
          display: flex;

          .icon {
            margin-right: 0.05rem;
            font-size: 1.2rem;
            font-weight: 400;
          }

          .star {
            color: #ffc107;
            margin-left: 1.5rem;
          }
        }
      }

      button {
        background-color: transparent;
        color: inherit;
        border: 1px solid ${({ theme }) => theme.colors.secondary2};
        padding: 0.4rem 1.2rem;
        display: inline-block;
        border-radius: 0.5rem;
        font-weight: 400;
        font-size: 1.2rem;
        text-align: center;
        cursor: pointer;
        letter-spacing: 0.3rem;
        margin-bottom: 2rem;

        &:visited {
          background: linear-gradient(90deg, #e48f04 -1.65%, #f5d061 100%);
        }

        &:hover {
          color: ${({ theme }) => theme.colors.primary1};
          background: linear-gradient(90deg, #f5d061 -1.65%, #e48f04 100%);
          background-repeat: no-repeat;
        }
      }
    }
  }

  .list {
    background-color: ${({ theme }) => theme.colors.primary7};
    justify-content: space-between;
    margin: 0.5rem 0 0.5rem 0;
    padding: 1rem 1rem;
    width: 100%;
    border-radius: 1.1rem;
    color: ${({ theme }) => theme.colors.secondary2};
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary3};
      color: #000;
    }

    .top {
      display: none;
      justify-content: space-between;
      padding: 1rem 0;
      img {
        max-width: 100%;
      }
    }

    .list-technician {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      img {
        border-radius: 50%;
        max-width: 100%;
        height: 4.3rem;
        width: 4.3rem;
      }

      h4 {
        font-size: 1.3rem;
        font-weight: 600;
      }

      p {
        font-size: 0.8rem;
        font-weight: 400;
        font-style: italic;
      }

      .client-rating {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        span {
          display: flex;
          flex-direction: row;
          width: 7rem;

          .icon {
            margin-right: 0.05rem;
            font-size: 1.2rem;
            font-weight: 400;
          }

          .star {
            color: #ffc107;
          }
        }
      }
      button {
        background-color: transparent;
        color: inherit;
        border: 1px solid ${({ theme }) => theme.colors.secondary2};
        padding: 0.4rem 1.2rem;
        display: inline-block;
        border-radius: 0.5rem;
        font-weight: 400;
        font-size: 1.2rem;
        text-align: center;
        cursor: pointer;
        letter-spacing: 0.3rem;

        &:visited {
          background: linear-gradient(90deg, #e48f04 -1.65%, #f5d061 100%);
        }

        &:hover {
          color: ${({ theme }) => theme.colors.primary1};
          background: linear-gradient(90deg, #f5d061 -1.65%, #e48f04 100%);
          background-repeat: no-repeat;
        }
      }
    }
  }
`;

export const TechnicianPicked = styled.div`
  border: 1px solid #555555;
  filter: drop-shadow(0px 7px 39px rgba(0, 0, 0, 0.08));
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 90%;
  margin: 0 auto;

  img {
    width: 4.4rem;
    height: 4.4rem;
  }

  .icon {
    color: #e48f04;
    font-size: 2rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  span {
    display: flex;
    flex-direction: column;

    h6 {
      font-size: 1.3rem;
      font-weight: 700;
    }

    p {
      font-size: 1.1rem;
      font-style: italic;
      opacity: 0.8;
    }
  }
`;
