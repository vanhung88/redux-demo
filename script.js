import { createStore } from 'https://cdn.skypack.dev/redux';

const initialState = 0;

//Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'DEPOSIT':
      return state + action.payload;
    case 'WITHDRAW':
      return state - action.payload;
    default:
      return state;
  }
}

//Store
const store = createStore(reducer);
console.log('debug', store);
