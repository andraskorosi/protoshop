import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  opacity: 0.8;
  transition-duration: 200ms;
`

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  transition-duration: 400ms;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
  }
  p {
    font-weight: lighter;
    font-size: 16px;
  }

  @media screen and (max-width: 640px) {
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
  }
`

export const DirectoryItemContainer = styled(Link)`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: opacity 400ms, transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      opacity: 1
    }
    & ${Body} {
      opacity: 1;
    }
  }
  &:first-child {
    width: 100%;
  }

  @media screen and (max-width: 640px) {
    min-width: 45%;
    height: 180px;
  }
  @media screen and (max-width: 414px) {
    min-width: 100%;
  }
`