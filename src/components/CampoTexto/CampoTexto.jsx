import './CampoTexto.css'
import PropTypes from 'prop-types'

function CampoTexto({ title, placeholder, required }) {
  const placeholderUpdated = `${placeholder}...`
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
      />
    </div>
  )
}

CampoTexto.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
}

export default CampoTexto
