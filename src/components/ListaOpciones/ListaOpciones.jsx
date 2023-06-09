import PropTypes from 'prop-types'
import './ListaOpciones.css'

function ListaOpciones({ value, setValue, equipos }) {
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className='lista-opciones'>
      <label
        htmlFor=''
        className='label'>
        Equipo
      </label>
      <select
        value={value}
        onChange={handleChange}>
        <option
          value=''
          disabled
          defaultValue=''
          hidden>
          Seleccionar equipo
        </option>
        {equipos.map((equipo, index) => (
          <option
            value={equipo}
            key={index}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  )
}

ListaOpciones.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  equipos: PropTypes.array.isRequired,
}

export default ListaOpciones
