# Kladi

> A easy to use state management library for react

[![NPM](https://img.shields.io/npm/v/sphere.svg)](https://www.npmjs.com/package/sphere) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save kladi
```

## Usage

```jsx
import {Provider, useState} from 'kladi'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<Provider>
<App/>
</Provider>, document.getElementById('root'))

const App = props => {
    let [count, setCount] = useState('count', 0)

    return (
        <div>
        {count}
        <button onClick={() => { setCount(count + 1) }}>Press</button>
        </div>
    )

}
```

## License

MIT © [Ninja-Developers](https://github.com/Ninja-Developers)
