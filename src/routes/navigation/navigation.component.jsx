import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import Logo from '../../assets/proto-logo.png';
import { 
  NavigationContainer,
  Nav,
  LogoContainer,
  NavLinks,
  NavLink
} from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  
  const signOutHandler = async () => {
    await signOutUser();
  }
  
  return (
    <Fragment>
      <NavigationContainer>
        <Nav>
          <LogoContainer to='/'>
            <img src={Logo} className='logo' alt='logo' />
          </LogoContainer>
          <NavLinks>
            <NavLink to='/shop'>
              SHOP
            </NavLink>
            {
              currentUser ? (<NavLink onClick={signOutHandler}>SIGN OUT</NavLink>)
              : (<NavLink to='/auth'>SIGN IN</NavLink>)
            }
            <CartIcon />
          </NavLinks>
          {isCartOpen && <CartDropdown />} 
          {/* && shortcircuit operator, both sides needs to be true */}
       </Nav>
      </NavigationContainer>
      <div className='content'>
        <div className='spring'><Outlet /></div>
      </div>
    </Fragment>
  )
};

export default Navigation