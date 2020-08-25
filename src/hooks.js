import store from './context'
import { useContext } from 'react'
import { CREATE, UPDATE } from './constants'

const useState = (type = 'read' || 'write' || 'update', name, value) => {

    const { state, dispatch } = useContext(store)

    switch (type) {
        case 'read':
            return state[name]

        case 'write':
            dispatch({ type: CREATE, name: name, value: value })
            return state[name]

        case 'update':
            dispatch({ type: UPDATE, name: name, value: value })
            return state[name]

        default:
            throw new Error('enter type of operation')
    }



}


export { useState }