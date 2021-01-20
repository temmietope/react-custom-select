# react-custom-select

> React custom select library with customizable tags

[![NPM](https://img.shields.io/npm/v/react-custom-select.svg)](https://www.npmjs.com/package/react-custom-select) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-custom-select
```

## Usage

```jsx
import React, { useState } from 'react'
import ReactSelect from 'react-custom-select'

const App = () => {
  //Component state
  const [address, setAddress] = useState('')
  //Array
  const locations = [
    { value: 'lagos', label: 'Lagos' },
    { value: 'london', label: 'London' }
  ]
  //Function to update value
  const updateSelect = (key, name) => {
    setAddress(key)
  }
  return (
    <ReactSelect
      optionsArray={locations}
      value={address}
      onClick={updateSelect}
      name='address'
    />
  )
}
```

## License

MIT © [temmietope](https://github.com/temmietope)
