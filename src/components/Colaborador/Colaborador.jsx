import PropTypes from 'prop-types'
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

import './Colaborador.css'

function Colaborador({ datos, colorPrimario, eliminarColaborador, like }) {
  const { nombre, puesto, foto, id, fav } = datos
  return (
    <article className='colaborador'>
      <AiFillCloseCircle
        className='eliminar'
        onClick={() => eliminarColaborador(id)}
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
        {fav ? (
          <AiFillHeart
            color='red'
            onClick={() => like(id)}
          />
        ) : (
          <AiOutlineHeart onClick={() => like(id)} />
        )}
      </div>
    </article>
  )
}

Colaborador.propTypes = {
  datos: PropTypes.object,
  colorPrimario: PropTypes.string,
  eliminarColaborador: PropTypes.func,
  like: PropTypes.func,
}

export default Colaborador
