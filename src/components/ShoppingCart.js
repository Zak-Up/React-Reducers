import React, { useReducer } from 'react'
import { TYPES } from '../actions/shoppingActions';
import { shoppingInitialState, shoppingReducer } from '../reducers/shoppingReducer'
import CartItem from './CartItem';
import ProductItem from './ProductItem';
import TotalAmount from './TotalAmount';

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const addToCart = (id) => {
    console.log(id)
    dispatch({type: TYPES.ADD_TO_CART, payload: id });
  };

  const delFromCart = (id, all = false) => {
    console.log(id, all);
    if(all){
      dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
    } else {
      dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload: id })
    }
  };

  const clearCart = () => {
    dispatch({type: TYPES.CLEAR_CART})
  };

  const TotalAmountEnd = () => {
    dispatch({type: TYPES.TOTAL_AMOUNT})
  };

  return (
    <div >
      <h2 style={{ textAlign: 'center'}}>Shopping Cart</h2>
      <h3>Productos</h3>
      <article className='box grid-responsive'>
        {products.map((product) => 
              <ProductItem 
                   key={product.id} 
                   data={product} 
                   addToCart={addToCart}
              />)
        }
      </article>
      
      <h3>Carrito</h3>
      <article className='box'>
        <button onClick={clearCart}>Limpiar Carrito</button>
        {
          cart.map((item, index) => 
            <CartItem 
                key={index}
                data={item}
                delFromCart={delFromCart}
                />)
        }
      </article>

      <article className='box'>
        <TotalAmount amount={() => TotalAmountEnd}/>
      </article>
    </div>
  )
}

export default ShoppingCart