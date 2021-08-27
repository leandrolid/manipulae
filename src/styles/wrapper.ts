import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;

  main {
    width: 100vw;
    flex: 1;
  }

  @media screen and (max-width: 1024px) {
    position: relative;
    width: 100vw;
  }
`;
