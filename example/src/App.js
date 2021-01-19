import React, { useState } from 'react'

import ReactSelect from 'react-custom-select'
import 'react-custom-select/dist/index.css'

const App = () => {
  const locations = [
    { value: 'lagos', label: 'Lagos' },
    { value: 'london', label: 'London' }
  ]
  const [address, setAddress] = useState('')
  const updateSelect = (key, name) => {
    console.log(key, name)
    setAddress(key)
  }
  return (
    <ReactSelect
      optionsArray={locations}
      defaultValue={locations[0]}
      objectKey='value'
      objectValue='label'
      value={address}
      placeholder='Select Address'
      onClick={updateSelect}
      name='address'
      dropdownArrow={
        <svg
          enable-background='new 0 0 256 256'
          version='1.1'
          viewBox='0 0 256 256'
          fill='rgba(154, 159, 191, 0.5)'
        >
          <polygon points='225.81 48.907 128 146.72 30.187 48.907 0 79.093 128 207.09 256 79.093' />
        </svg>
      }
      primaryColor='#00c4f9'
    />
  )
}

export default App
