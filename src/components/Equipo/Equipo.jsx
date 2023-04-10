import PropTypes from 'prop-types'
import './Equipo.css'
import Colaborador from '../Colaborador'

function Equipo({ equipo, colorPrimario, colorSecundario, colaboradores }) {
  const estilo = {
    backgroundColor: colorSecundario,
  }

  const estiloTitulo = {
    borderColor: colorPrimario,
  }

  return (
    <>
      {colaboradores.length > 0 && (
        <section
          className='equipo'
          style={estilo}>
          <h3 style={estiloTitulo}>{equipo}</h3>
          <div className='colaboradores'>
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
              />
            ))}
          </div>
        </section>
      )}
    </>
  )
}

Equipo.propTypes = {
  equipo: PropTypes.string.isRequired,
  colorPrimario: PropTypes.string.isRequired,
  colorSecundario: PropTypes.string.isRequired,
  colaboradores: PropTypes.array.isRequired,
}

export default Equipo
