import PropTypes from 'prop-types'
import './Colaborador.css'

function Colaborador({ datos }) {
  const { nombre, puesto, foto, equipo } = datos
  return (
    <article className='colaborador'>
      <div className='encabezado'>
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
}

export default Colaborador
