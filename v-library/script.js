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

//action
function actionDeposit(payload) {
  return {
    type: 'DEPOSIT',
    payload: payload,
  };
}

function actionWithdraw(payload) {
  return {
    type: 'WITHDRAW',
    payload: payload,
  };
}

//Store
const store = (window.store = createStore(reducer));
console.log('debug', store);

//DOM events
const deposit = document.querySelector('#deposit');
const withdraw = document.querySelector('#withdraw');

//Event handler
deposit.onclick = function () {
  store.dispatch(actionDeposit(10));
};
withdraw.onclick = function () {
  store.dispatch(actionWithdraw(10));
};

//listener
store.subscribe(() => {
  window.alert('state changed');
  render();
});
function render() {
  const output = document.querySelector('#output');
  output.innerText = store.getState();
}

render();
