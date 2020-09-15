import { CREATE, UPDATE } from '../constants'

export default (state, action) => {
  switch (action.type) {
    case CREATE: {
      const newState = { ...state }
      newState[action.name] = action.value
      return newState
    }
    case UPDATE: {
      const newState = { ...state }
      newState[action.name] = action.value
      return newState
    }
    default: {
      return state
    }
  }
}
