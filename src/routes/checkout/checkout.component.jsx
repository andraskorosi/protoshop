import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { 
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total 
} from './checkout.styles';

const Checkout = () => {
  const {cartItems, cartTotal} = useContext(CartContext)
  
  return(
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Unit price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => 
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      )}
      <Total>
        {cartTotal === 0 ? 'Your cart is empty' : `Total: €${cartTotal}`}
      </Total>
    </CheckoutContainer>
  )
}

export default Checkout