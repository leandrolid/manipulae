import styled from 'styled-components';
import { usePlayerContext } from '../../contexts/PlayerContext';

const PlayerContainer = styled.div`
  width: 26.5rem;
  height: 100vh;
  padding: 3rem 4rem;
  transition: 0.2s;

  background-color: var(--purple-500);
  color: var(--white);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;

  .hideButton {
    display: none;
    position: absolute;
    left: 2rem;
    top: 1rem;
    padding: 0.5rem 1rem;
    text-align: center;
    vertical-align: middle;
    border-radius: 1rem;
    color: var(--white);
    background: var(--purple-400);
  }

  header {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  strong {
    font-family: Lexend, sans-serif;
    font-weight: 600;
  }

  footer {
    align-self: stretch;

    &.empty {
      opacity: 0.5;
    }
  }

  .emptyPlayer {
    width: 100%;
    height: 20rem;
    border: 1.5px dashed var(--purple-300);
    border-radius: 1.5rem;
    background: linear-gradient(
      143deg,
      var(--purple-transparent) 0%,
      var(--transparent) 100%
    );
    padding: 4rem;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .currentEpisode {
    text-align: center;

    img {
      height: 16rem;
      border-radius: 1.5rem;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font: 600 1.25rem Lexend, sans-serif;
      line-height: 1.75rem;
    }

    span {
      display: block;
      margin: 1rem 0;
      opacity: 0.6;
      line-height: 1.5rem;
    }
  }

  .progress {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.875rem;

    span {
      display: inline-block;
      // width: 4rem;
      text-align: center;
    }

    .slider {
      flex: 1;

      .emptySlider {
        width: 100%;
        height: 4px;
        background-color: var(--purple-300);
        border-radius: 2px;
      }
    }
  }

  .controls {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
    gap: 1.5rem;

    button {
      background: transparent;
      font-size: 0;
      width: 2rem;
      height: 4rem;
      transition: 0.2s;

      &.play {
        width: 4rem;
        border-radius: 1rem;
        background: var(--purple-400);

        &:hover:not(:disabled) {
          filter: brightness(0.95);
        }
      }

      &:disabled {
        cursor: default;
      }

      &:hover:not(:disabled) {
        filter: brightness(0.8);
      }

      &.active {
        filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);
      }

      &.active:hover:not(:disabled) {
        filter: brightness(0.6) invert(0.35) sepia(1) saturate(3)
          hue-rotate(100deg);
      }
    }
  }

  @media screen and (max-width: 1024px) {
    position: absolute;
    transform: translateX(100vw);
    width: 100vw;

    transform: ${() => {
      const { playerPosition } = usePlayerContext();
      return `translateX(${playerPosition})`;
    }};

    .hideButton {
      display: block;
    }

    strong {
      font-size: 2rem;
    }

    .emptyPlayer {
      height: 50%;
    }

    footer {
      span {
        font-size: 1rem;
      }
    }

    .currentEpisode {
      img {
        height: 70vw;
      }

      strong {
        font-size: 2rem;
      }

      span {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 600px) {
    header {
      margin-top: 2rem;

      strong {
        font-size: 1.25rem;
      }
    }

    .currentEpisode {
      strong {
        font-size: 1.25rem;
      }

      span {
        font-size: 1rem;
      }
    }
  }

  @media screen and (max-height: 640px) {
    .currentEpisode {
      img {
        height: 30vh;
      }
    }
  }

  @media screen and (max-height: 568px) {
    .currentEpisode {
      img {
        height: 20vh;
        width: 90vw;
      }
    }
  }
`;

export { PlayerContainer };
