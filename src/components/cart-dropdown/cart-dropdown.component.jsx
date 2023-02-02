import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);  
  const navigate = useNavigate();

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  const goToCheckoutHandler = () => {navigate('/checkout')};
  return (
    <div className='cart-dropdown-container'>
      <div className='close-icon' onClick={toggleIsCartOpen}>&#10005;</div>
      <div className={ cartItems.length > 2 ? 'cart-items scroll' : 'cart-items' }>
        {cartItems.map(
          (item) => <CartItem cartItem={item} key={item.id}></CartItem>
        )}
      </div>
      { cartItems.length > 0
        ? <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        : <span style={{textAlign: 'center'}}>Your cart is empty</span>
      }
    </div>
  )
}

export default CartDropdown