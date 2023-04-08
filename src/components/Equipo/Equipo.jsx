import PropTypes from 'prop-types'
import './Equipo.css'
import Colaborador from '../Colaborador'

function Equipo({ equipo, colorPrimario, colorSecundario }) {
  const estilo = {
    backgroundColor: colorSecundario,
  }

  const estiloTitulo = {
    borderColor: colorPrimario,
  }

  return (
    <section
      className='equipo'
      style={estilo}>
      <h3 style={estiloTitulo}>{equipo}</h3>
      <div className='colaboradores'>
        <Colaborador />
        <Colaborador />
        <Colaborador />
      </div>
    </section>
  )
}

Equipo.propTypes = {
  equipo: PropTypes.string.isRequired,
  colorPrimario: PropTypes.string.isRequired,
  colorSecundario: PropTypes.string.isRequired,
}

export default Equipo
