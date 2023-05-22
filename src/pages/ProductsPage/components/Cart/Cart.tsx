import { CartIcon, ClearCartIcon } from '@/components';
import { useCartGlobalState } from '@/hooks';
import React, { useId } from 'react';
import { ADD_TO_CART, CLEAN_CART } from '../../constants';
import './Cart.css';

export type CartProps = {};

const Cart: React.FC<CartProps> = () => {
  const { state, dispatch } = useCartGlobalState();
  const cartCheckboxSelectionId = useId();
  return (
    <>
      <label className="Cart__button" htmlFor={cartCheckboxSelectionId}>
        <CartIcon />
      </label>
      <input type="checkbox" hidden id={cartCheckboxSelectionId} />
      <aside className="Cart">
        <ul>
          {state.length > 0 ? (
            state?.map(({ id, image, qty, title, price, ...others }) => {
              return (
                <li key={id}>
                  <img src={image} alt={title} />
                  <div>
                    <strong>{title}</strong>- ${price}
                  </div>
                  <footer>
                    <small>Qty: ${qty}</small>
                    <button
                      onClick={() =>
                        dispatch({
                          type: ADD_TO_CART,
                          payload: { id, image, qty, title, price, ...others },
                        })
                      }
                    >
                      +
                    </button>
                  </footer>
                </li>
              );
            })
          ) : (
            <>No elements added</>
          )}
        </ul>
        <button
          className="Cart__clear"
          onClick={() => dispatch({ type: CLEAN_CART })}
        >
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};

export default Cart;
