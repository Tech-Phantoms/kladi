import React from 'react'

import { useState } from 'sphere'
import 'sphere/dist/index.css'

const Check = props => {
  let [count, setCount] = useState('count', 0)
  return (
    <div>
      {count}
    </div>
  )
}

const App = () => {
  let [count, setCount] = useState('count', 0)

  return (
    <div>
      <Check />
      {console.log('app', count)}
      <button onClick={() => { setCount(count + 1) }}>Press</button>
    </div>
  )
}

export default App
