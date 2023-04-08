import { useState } from 'react'
import './CampoTexto.css'
import PropTypes from 'prop-types'

function CampoTexto({ title, placeholder, required, value, setValue }) {
  const placeholderUpdated = `${placeholder}...`

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className='campo-texto'>
      <label
        className='label'
        htmlFor=''>
        {title}
      </label>
      <input
        type='text'
        placeholder={placeholderUpdated}
        required={required}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

CampoTexto.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
}

export default CampoTexto
