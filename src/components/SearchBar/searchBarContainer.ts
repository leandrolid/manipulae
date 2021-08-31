import styled from 'styled-components';

export const SearchBarContainer = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;

  input {
    flex: 1;
    border: solid 1px #ddd;
    border-radius: 3px;
    height: 50px;
    padding: 10px;
    background-color: #fff;
  }

  button {
    border-radius: 2px;
    padding: 10px 20px;
    margin-left: 10px;
    background-color: #ddd;
  }

  @media screen and (max-width: 600px) {
    padding: 0 1rem;
  }

`;
