import styled from 'styled-components';

const AllEpisodesContainer = styled.section`
  margin-bottom: 2rem;

  table {
    width: 100%;

    thead {
      font: 500 0.75rem Lexend, sans-serif;
      text-align: left;
      text-transform: uppercase;
      color: var(--gray-200);

      th:last-child,
      th:first-child {
        opacity: 0;
      }
    }

    th,
    td {
      padding: 0.75rem 1rem;
    }

    td {
      font-size: 0.875rem;

      &.image {
        // padding: 0;
        width: 5rem;

        img {
          min-width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.5rem;
        }
      }

      a {
        color: var(--gray-800);
        font-family: Lexend, sans-serif;
        font-weight: 600;
        line-height: 1.4rem;
        font-size: 1rem;

        &:hover {
          text-decoration: underline;
        }

        &:hover {
          filter: brightness(0.95);
        }
      }

      button {
        width: 2rem;
        height: 2rem;
        background: var(--white);
        border: 1px solid var(--gray-100);
        border-radius: 0.5rem;
        font-size: 0;
        transition: 0.2s;

        img {
          width: 1.25rem;
          height: 1.25rem;
        }

        &:hover {
          filter: brightness(0.95);
        }

        &.active {
          img {
            filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);
          }
        }

        &.active:hover {
          img {
            filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);
          }
        }
      }

      &.date {
        width: 7rem;
        text-transform: capitalize;
      }
    }

    tbody {
      tr {
        border: 1px solid black;
      }
    }

  }

  .mobileSinger {
    display: none;
  }

  .favorite {
    width: 0.5rem;
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    h2 {
      margin-left: 1rem;
    }

    .members,
    .title {
      max-width: 10rem;
      /* white-space: nowrap; */
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .members {
      max-width: 5rem;
    }

    /* .duration {
      display: none;
    } */

    .container {
      th:last-child,
      th:first-child,
      td:first-child {
        display: none;
      }
    }

    .members {
      display: none;
      font-size: 3rem;
    }

    .mobileSinger {
    display: block;
  }
  }

  /* @media screen and (max-width: 480px) {
    .image {
      display: none;
    }
  } */

  /* @media screen and (max-width: 380px) {
    .favorite {
      display: none;
    }
  } */

  @media screen and (max-width: 375px) {
    .duration {
      display: none;
    }
  }
`;

export { AllEpisodesContainer };
