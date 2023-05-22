import { AddToCartIcon, RemoveFromCartIcon } from '@/components';
import { useCartGlobalState } from '@/hooks';
import { ProductModel } from '@/models';
import { ADD_TO_CART, DELETE_FROM_CART } from '../../constants';
import './Product.css';

function Product({ id, image, title, price, ...other }: ProductModel) {
  const { dispatch, state } = useCartGlobalState();
  const handleAddOrRemoveFromCart = () => {
    dispatch({
      type: isAddedToCart ? DELETE_FROM_CART : ADD_TO_CART,
      payload: { id, image, title, price, ...other },
    });
  };
  const isAddedToCart = state.some((item) => item.id === id);
  return (
    <li className="product" key={id}>
      <img className="product__image" src={image} alt={title} />
      <div className="product__tittle">
        {title} - <small className="product__price">${price}</small>
      </div>
      <button
        onClick={handleAddOrRemoveFromCart}
        className={`product__add ${!isAddedToCart ? 'bg-blue' : 'bg-red'}`}
      >
        {isAddedToCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
      </button>
    </li>
  );
}

export default Product;
