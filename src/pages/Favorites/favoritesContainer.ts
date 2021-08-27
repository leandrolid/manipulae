import styled from 'styled-components';

export const FavoritesMain = styled.div`
  flex: 1;
  height: calc(100vh - 6.5rem);
  overflow-x: hidden;
  overflow-y: auto;
`;

export const FavoritesContainer = styled.div`
  max-width: 45rem;
  padding: 3rem 2rem;
  margin: 0 auto;

  .thumbnail {
    position: relative;

    > img {
      width: 100%;
      max-width: 700px;
      max-height: 160px;
      border-radius: 1rem;
    }

    .button {
      width: 3rem;
      height: 3rem;
      border-radius: 0.75rem;
      border: none;
      position: absolute;
      z-index: 5;
      font-size: 0;
      transition: 0.2s;

      &.back {
        left: 0;
        top: 50%;
        background: var(--purple-500);
        transform: translate(-50%, -50%);
      }
      &.play {
        right: 0;
        top: 50%;
        background: var(--green-500);
        transform: translate(50%, -50%);
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  header {
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--gray-100);

    h1 {
      margin-top: 2rem;
      margin-bottom: 2.5rem;
    }

    span {
      display: inline-block;
      font-size: 0.875rem;

      & + span {
        margin-left: 1rem;
        padding-left: 1rem;
        position: relative;

        &::before {
          content: '';
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #ddd;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }

  .empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
`;
