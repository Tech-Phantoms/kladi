import store from '../context'
import { useContext } from 'react'
import { CREATE, UPDATE } from '../constants'

const useState = (name, value) => {
  const { state, dispatch } = useContext(store)
  const changer = (name) => (newVal) => {
    dispatch({ type: UPDATE, name: name, value: newVal })
  }
  if (state[name] === undefined) {
    dispatch({ type: CREATE, name: name, value: value })
    return [state[name], changer(name)]
  } else {
    return [state[name], changer(name)]
  }
}
export { useState }
