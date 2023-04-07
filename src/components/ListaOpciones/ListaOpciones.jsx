import './ListaOpciones.css'

function ListaOpciones() {
  const equipos = [
    'Programación',
    'FrontEnd',
    'Data Science',
    'DevOps',
    'UX y Diseño',
    'Móvil',
    'Innovación y Gestión',
  ]
  return (
    <div className='lista-opciones'>
      <label
        htmlFor=''
        className='label'>
        Equipo
      </label>
      <select
        name=''
        id=''>
        {equipos.map((equipo, index) => (
          <option
            key={index}
            value=''>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ListaOpciones
