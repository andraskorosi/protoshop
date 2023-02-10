import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background-color: #fff;
`

export const Nav = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;

  @media screen and (max-width: 600px) {height: 60px; padding: 0 20px}
  @media screen and (max-width: 414px) {padding: 5px}
`

export const LogoContainer = styled(Link) `
  display: flex;
  align-items: center;
  width: 180px;

  .logo {max-width: 100%}

  @media screen and (max-width: 600px) {width: 140px}
  @media screen and (max-width: 414px) {width: 120px}

`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;   
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media screen and (max-width: 600px) {padding: 8px 12px;}
  @media screen and (max-width: 414px) {padding: 5px}
`
