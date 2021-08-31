import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 0 4rem;
  height: calc(100vh - 6.5rem);
  // max-width: calc(100vw - 26.5rem);
  max-width: 100vw;
  overflow-x: hidden;
  position: relative;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2,
    a {
      margin: 3rem 0 1.5rem 0;
    }

    .favorites {
      color: var(--gray-800);
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: 100vw;
  }

  @media screen and (max-width: 600px) {
    padding: 0 0.5rem;
    height: calc(100vh - 6.5rem);

    .header {
      padding: 0 1rem;
    }
  }
`;
