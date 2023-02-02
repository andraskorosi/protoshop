import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import Logo from '../../assets/proto-logo.png';
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  
  const signOutHandler = async () => {
    await signOutUser();
  }
  
  return (
    <Fragment>
      <div className="navigation-container">
        <div className="navigation">
          <Link className="logo-container" to="/">
            <img src={Logo} className="logo" alt="logo" />
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
            {
              currentUser ? (<span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>)
              : (<Link className="nav-link" to="/auth">SIGN IN</Link>)
            }
            <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />} 
          {/* && shortcircuit operator, both sides needs to be true */}
        </div>
      </div>
      <div className="content">
        <div className="spring"><Outlet /></div>
      </div>
    </Fragment>
  )
};

export default Navigation