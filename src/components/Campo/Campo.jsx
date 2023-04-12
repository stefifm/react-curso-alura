import './Campo.css'
import PropTypes from 'prop-types'

function Campo({ title, placeholder, required, value, setValue, type = 'text' }) {
  const placeholderUpdated = `${placeholder}...`

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className={`campo campo-${type}`}>
      <label
        className='label'
        htmlFor=''>
        {title}
      </label>
      <input
        type={type}
        placeholder={placeholderUpdated}
        required={required}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

Campo.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string,
}

export default Campo
