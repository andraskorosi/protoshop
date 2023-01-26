import { Fragment, useContext } from 'react'; // use Fragment if you don't need to render a specific html element (ex: wrapper)
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  
  const signOutHandler = async () => {
    await signOutUser();
  }
  
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
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
      <Outlet />
    </Fragment>
  )
};

export default Navigation