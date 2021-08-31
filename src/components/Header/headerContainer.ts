import styled from 'styled-components';
import logo from '../../assets/logo.svg'

const HeaderContainer = styled.div`
background-color: var(--white);
  height: 6.5rem;
  display: flex;
  align-items: center;
  padding: 2rem 4rem;
  border-bottom: 1px solid var(--gray-100);

  div {
    height: 6.5rem;
    width: 100vw;
    max-height: 10rem;
    max-width: 15rem;
    background-image: url( ${logo} );
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    cursor: pointer;

    img {
      width: 100%;
    }
  }

  p {
    margin-left: 2rem;
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid var(--gray-100);
  }

  span {
    margin-left: auto;
    text-transform: capitalize;
  }

  @media screen and (max-width: 600px) {
    p {
      display: none;
    }
  }

  @media screen and (max-width: 450px) {
    justify-content: center;
    span {
      display: none;
    }
  }
`;

export { HeaderContainer };