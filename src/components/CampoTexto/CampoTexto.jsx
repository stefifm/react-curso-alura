import './CampoTexto.css'
import PropTypes from 'prop-types'

function CampoTexto({ title, placeholder }) {
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
      />
    </div>
  )
}

CampoTexto.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default CampoTexto
