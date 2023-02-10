import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 370px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 85%;
    object-fit: cover;
    margin-bottom: 5px;
    transition-duration: 200ms;
  }
  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 250px;
    display: none;
  }
  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 860px) {
    height: 320px;

    button {
      top: 210px;
    }
  }
`

export const ProductFooter = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 20px;
`