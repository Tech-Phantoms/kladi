import {
    CREATE,
    UPDATE
} from './constants'

export default (state, action) => {
    let newState = state
    switch (action.type) {
        case CREATE:
            newState[action.name] = action.value
            return newState

        case UPDATE:
            newState[action.name] = action.value
            return newState

        default:
            return state
    }
}