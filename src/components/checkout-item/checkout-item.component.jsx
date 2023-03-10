import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { 
  CheckoutItemContainer,
  ImageContainer,
  RemoveButton
} from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemsFromCart } = useContext(CartContext); 
  
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemsHandler = () => clearItemsFromCart(cartItem);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'>€{price}</span>
      <RemoveButton onClick={clearItemsHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem