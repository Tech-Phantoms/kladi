import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'sphere'

ReactDOM.render(<Provider initialState={{name: 'Souvik'}} ><App /></Provider>, document.getElementById('root'))
