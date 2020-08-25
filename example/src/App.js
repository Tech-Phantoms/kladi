import React from 'react'

import { useState } from 'sphere'
import 'sphere/dist/index.css'

const App = () => {
  let [state, setCount] = useState('count', 0)

  return (
    <div>
      {state.count}
      {console.log('app',state.count)}
      <button onClick={() => { setCount(state.count + 1)}}>Press</button>
    </div>
  )
}

export default App
