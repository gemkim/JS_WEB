const redux = require('redux');
const createStore = redux.createStore;
//actions
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER'
export const addSubscriber = () => {
  return {
    type: ADD_SUBSCRIBER
  }
}

// reduvers - handling
const initialState = {
  subScribers : 365
}
const reducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_SUBSCRIBER :
      return {
        ...state,
        subScribers : state.subScribers + 1
      }
    default: return state;
  }
}

//store
export const store = createStore(reducer)