import store from '../context'
import React, { useReducer } from 'react'
import reducer from '../reducers'

const Provider = ({ children, initialState = {} }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
}
export default Provider
