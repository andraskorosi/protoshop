import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext)

  const addProductToCard = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="product-footer">
        <span>{name}</span>
        <span>€{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCard}>Add to card</Button>
    </div>
  )
}

export default ProductCard;