import { TYPES } from "../actions/contadorActions";

export const contadorInitialState = { count: 0 };

export const contadorInit = (contadorInitialState) => {
  return{
    count: contadorInitialState.count + 100,
  }
};

export function contadorReducer(state, action){

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