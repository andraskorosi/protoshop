import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 40px 15px 15px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  @media screen and (max-width: 600px) {
    top: 70px;
    right: 20px;
  }
  @media screen and (max-width: 414px) {
    top: 60px;
  }
`

export const CloseIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 15px;
  font-size: 20px;
  cursor: pointer;
`

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`
