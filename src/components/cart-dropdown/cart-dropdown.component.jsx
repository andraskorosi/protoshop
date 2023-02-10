import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import { 
  CartDropdownContainer, 
  CartItems, 
  CloseIcon 
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);  
  const navigate = useNavigate();

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  const goToCheckoutHandler = () => {navigate('/checkout')};
  return (
    <CartDropdownContainer>
      <CloseIcon onClick={toggleIsCartOpen}>&#10005;</CloseIcon>
      <CartItems className={ cartItems.length > 2 ? 'scroll' : '' }>
        {cartItems.map(
          (item) => <CartItem cartItem={item} key={item.id}></CartItem>
        )}
      </CartItems>
      { cartItems.length
        ? <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        : <span style={{textAlign: 'center'}}>Your cart is empty</span>
      }
    </CartDropdownContainer>
  )
}

export default CartDropdown