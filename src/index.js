import React, { useState, useRef } from 'react'
import * as Styles from './styles'
import PropTypes from 'prop-types'

const ReactSelect = ({
  defaultValue = '',
  placeholder = 'Select a value',
  optionsArray = [],
  value = '',
  onClick,
  name = '',
  objectKey = 'value',
  objectValue = 'label',
  dropdownArrow = '',
  primaryColor = '#00c4f9'
}) => {
  const checkbox = useRef(null)
  const selected = optionsArray.find((obj) => {
    return obj[objectKey] === value
  })
  const [showOptions, setShowOptions] = useState(false)
  return (
    <Styles.SelectInputTag primaryColor={primaryColor}>
      <Styles.SelectIcon>
        <input
          type='checkbox'
          ref={checkbox}
          onChange={() => setShowOptions(checkbox.current.checked)}
        />
        {dropdownArrow !== '' ? (
          dropdownArrow
        ) : (
          <svg
            enable-background='new 0 0 256 256'
            version='1.1'
            viewBox='0 0 256 256'
            fill='rgba(154, 159, 191, 0.5)'
          >
            <polygon points='225.81 48.907 128 146.72 30.187 48.907 0 79.093 128 207.09 256 79.093' />
          </svg>
        )}
      </Styles.SelectIcon>

      <div className='select-tag'>
        <p className={value !== '' ? 'selected' : 'placeholder'}>
          {defaultValue !== '' && value === ''
            ? defaultValue[objectValue]
            : value !== ''
            ? selected[objectValue]
            : placeholder}
        </p>
      </div>
      <Styles.SelectOptions display={showOptions} primaryColor={primaryColor}>
        {placeholder !== '' && <p className='disabled'>{placeholder}</p>}
        {optionsArray.map((val, index) => {
          return (
            <p
              key={index}
              onClick={(e) => {
                onClick(val[objectKey], name)
                setShowOptions(false)
                checkbox.current.checked = false
              }}
            >
              {val[objectValue]}
            </p>
          )
        })}
      </Styles.SelectOptions>
    </Styles.SelectInputTag>
  )
}

ReactSelect.propTypes = {
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  optionsArray: PropTypes.array,
  onClick: PropTypes.func,
  objectKey: PropTypes.string,
  objectValue: PropTypes.string,
  dropdownArrow: PropTypes.string,
  primaryColor: PropTypes.string
}
export default ReactSelect
