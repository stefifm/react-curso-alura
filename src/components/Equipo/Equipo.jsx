import PropTypes from 'prop-types'
import hexToRgba from 'hex-to-rgba'
import './Equipo.css'
import Colaborador from '../Colaborador'

function Equipo({
  equipo,
  colorPrimario,
  colorSecundario,
  colaboradores,
  eliminarColaborador,
  actualizarColorEquipo,
  id,
}) {
  const estilo = {
    backgroundColor: hexToRgba(colorPrimario, 0.6),
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
          <input
            type='color'
            className='input-color'
            value={colorPrimario}
            onChange={(e) => actualizarColorEquipo(e.target.value, id)}
          />
          <h3 style={estiloTitulo}>{equipo}</h3>
          <div className='colaboradores'>
            {colaboradores.map((colaborador) => (
              <Colaborador
                datos={colaborador}
                key={colaborador.id}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
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
  eliminarColaborador: PropTypes.func.isRequired,
  actualizarColorEquipo: PropTypes.func,
  id: PropTypes.string.isRequired,
}

export default Equipo
