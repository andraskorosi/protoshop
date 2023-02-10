import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { ProductCardContainer, ProductFooter } from './product-card.styles';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext)

  const addProductToCard = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ProductFooter>
        <span>{name}</span>
        <span>€{price}</span>
      </ProductFooter>
      <Button 
        buttonType={BUTTON_TYPE_CLASSES.inverted} 
        onClick={addProductToCard}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard;