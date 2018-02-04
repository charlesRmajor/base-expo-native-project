import { combineReducers, createStore } from 'redux'
const reducer = combineReducers({ basicReducer })
export const store = createStore(reducer)

function basicReducer(state = '', action) {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter
      default:
        return state
    }
  }
