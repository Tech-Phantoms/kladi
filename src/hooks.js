import store from './context'
import { useContext } from 'react'

const getState = name => {
    const { state, dispatch } = useContext(store)

    return state[name]
}


export { getState }