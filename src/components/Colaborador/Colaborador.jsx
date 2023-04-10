import PropTypes from 'prop-types'
import './Colaborador.css'

function Colaborador({ datos, colorPrimario }) {
  const { nombre, puesto, foto } = datos
  return (
    <article className='colaborador'>
      <div
        className='encabezado'
        style={{ backgroundColor: colorPrimario }}>
        <img
          src={foto}
          alt={nombre}
        />
      </div>
      <div className='info'>
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
      </div>
    </article>
  )
}

Colaborador.propTypes = {
  datos: PropTypes.object,
  colorPrimario: PropTypes.string,
}

export default Colaborador
