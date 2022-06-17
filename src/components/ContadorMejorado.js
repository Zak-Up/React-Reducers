import React, { useReducer } from 'react';
import { contadorInit, contadorReducer } from '../reducers/contadorReducer';
import { contadorInitialState } from '../reducers/contadorReducer';



const ContadorMejorado = () => {
  const [state, dispatch] = useReducer(contadorReducer, contadorInitialState, contadorInit);

  const sumar = () => dispatch({ type: "INCREMENT" });

  const sumar5 = () => dispatch({ type: "INCREMENT_5" });

  const restar = () => dispatch({ type: "DECREMENT" });

  const restar5 = () => dispatch({ type: "DECREMENT_5" });

  const reset = () => dispatch({ type: "RESET" });

  return (
    <div style={{textAlign: "center"}}>
      <h2>Contador Mejorado Reducer</h2>
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

export default ContadorMejorado