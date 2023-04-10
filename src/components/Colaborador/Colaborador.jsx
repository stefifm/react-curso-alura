import PropTypes from 'prop-types'
import { AiFillCloseCircle } from 'react-icons/ai'

import './Colaborador.css'

function Colaborador({ datos, colorPrimario, eliminarColaborador }) {
  const { nombre, puesto, foto } = datos
  return (
    <article className='colaborador'>
      <AiFillCloseCircle
        className='eliminar'
        onClick={eliminarColaborador}
      />
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
  eliminarColaborador: PropTypes.func,
}

export default Colaborador
