## KLADI (Development Version)

<p align="center">
  <a href="https://www.npmjs.com/package/kladi"><img src="https://github.com/Ninja-Developers/kladi/raw/master/logo.svg" width="80%"></a>
<br/>
<a href="https://www.npmjs.com/package/kladi"><img src="https://img.shields.io/npm/v/kladi.svg" alt="NPM"/></a>
<a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="JavaScript Style Guide"/></a>
<a href="https://github.com/Ninja-Developers/kladi/blob/master/LICENSE"><img src="https://img.shields.io/github/license/Ninja-Developers/kladi?logo=github" alt="Github License"></a>
</p>

## Install

```bash
npm install --save kladi
```

## Usage

```jsx
import { Provider, useState } from "kladi";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);

const App = (props) => {
  let [count, setCount] = useState("count", 0);

  return (
    <div>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Press
      </button>
    </div>
  );
};

```

## License

MIT © [Ninja-Developers](https://github.com/Ninja-Developers) an Open Source Initiative of  [Tech Phantoms](http://techphantoms.onrender.com)
