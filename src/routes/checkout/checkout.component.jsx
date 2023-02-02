import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';

const Checkout = () => {
  const {cartItems, cartTotal} = useContext(CartContext)
  
  return(
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Unit price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => 
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      )}
      <span className='total'>
        {cartTotal === 0 ? 'Your cart is empty' : `Total: €${cartTotal}`}
      </span>
    </div>
  )
}

export default Checkout