import React, { useReducer } from 'react';

const initialState = { count: 0 };

const init = (initialState) => {
  return{
    count: initialState.count + 100,
  }
};

const TYPES = {
  INCREMENT: "INCREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT: "DECREMENT",
  DECREMENT_5: "DECREMENT_5",
  RESET: "RESET"
}

function reducer(state, action){
  switch (action.type) {
    case TYPES.INCREMENT:
      return { count: state.count + 1}
    case TYPES.INCREMENT_5:
      return { count: state.count + 5}
    case TYPES.DECREMENT:
      return { count: state.count - 1}
    case TYPES.DECREMENT_5:
      return { count: state.count - 5}
    case TYPES.RESET:
      return { count: 0 }
    default:
      return state;
  }
}

const Contador = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const sumar = () => dispatch({ type: "INCREMENT" });

  const sumar5 = () => dispatch({ type: "INCREMENT_5" });

  const restar = () => dispatch({ type: "DECREMENT" });

  const restar5 = () => dispatch({ type: "DECREMENT_5" });

  const reset = () => dispatch({ type: "RESET" });

  return (
    <div style={{textAlign: "center"}}>
      <h2>Contador Reducer</h2>
      <nav>
        <button onClick={sumar5}>+5</button>
        <button onClick={sumar}>+</button>
        <button onClick={reset}>0</button>
        <button onClick={restar}>-</button>
        <button onClick={restar5}>-5</button>
      </nav>
      <h3>{state.count}</h3>
    </div>
  )
}

export default Contador