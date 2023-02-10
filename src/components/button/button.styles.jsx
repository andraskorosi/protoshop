import styled from 'styled-components';

export const BaseButton = styled.button`
  max-width: 100%;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 13px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Poppins';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  @media screen and (max-width: 760px) {
    padding: 0 25px;
  }
  
`

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`
