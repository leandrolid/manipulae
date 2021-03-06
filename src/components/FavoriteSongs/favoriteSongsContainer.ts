import styled from 'styled-components';

export const FavoriteSongsContainer = styled.section`
  ul {
    list-style: none;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: 1.5rem;

    li {
      background: var(--white);
      border: 1px solid var(--gray-100);
      padding: 1.25rem;
      border-radius: 1.5rem;
      width: 100%;

      position: relative;
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;

      /* img {
        width: 12rem;
        height: 6rem;
        border-radius: 1.25rem;
      } */

      .details {
        flex: 1;
        max-width: 70%;
        margin-left: 1rem;

        a {
          color: var(--gray-800);
          font-family: Lexend, sans-serif;
          font-weight: 600;
          text-decoration: none;
          line-height: 1.4rem;

          &:hover {
            text-decoration: underline;
          }
        }

        p {
          max-width: 70%;
          font-size: 0.875rem;
          margin-top: 0.5rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        span {
          display: inline-block;
          margin-top: 0.5rem;
          font-size: 0.875rem;
        }
      }

      button {
        position: absolute;
        right: 2rem;
        bottom: 2rem;

        width: 3rem;
        height: 3rem;
        background: var(--white);
        border: 1px solid var(--gray-100);
        border-radius: 0.675rem;
        font-size: 0;
        transition: 0.2s;

        img {
          width: 2.5rem;
          height: 2.5rem;
        }

        &:hover {
          filter: brightness(0.9);
        }

        &.close {
          position: absolute;
          right: -1rem;
          top: -1rem;
          border-radius: 50%;
          color: var(--red-500) !important;
          font-size: 1.5rem;
        }
      }
    }
  }
`;
