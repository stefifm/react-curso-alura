import './Boton.css'
import PropTypes from 'prop-types'

function Boton({ children }) {
  return <button className='button'>{children}</button>
}

Boton.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Boton
