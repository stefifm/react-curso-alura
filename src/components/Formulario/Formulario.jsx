import { useState } from 'react'
import PropTypes from 'prop-types'
import Boton from '../Boton'
import ListaOpciones from '../ListaOpciones'

import './Formulario.css'
import Campo from '../Campo'

function Formulario({ equipos, registrarColaborador, crearEquipo }) {
  const [nombre, setNombre] = useState('')
  const [puesto, setPuesto] = useState('')
  const [foto, setFoto] = useState('')
  const [equipo, setEquipo] = useState('')
  const [titulo, setTitulo] = useState('')
  const [color, setColor] = useState('')

  const manejarEnvio = (e) => {
    e.preventDefault()
    console.log('envio')
    const colaborador = {
      nombre,
      puesto,
      foto,
      equipo,
    }
    registrarColaborador(colaborador)
  }

  const handleSubmitTeam = (e) => {
    e.preventDefault()
    const nuevoEquipo = {
      titulo,
      colorPrimario: color,
    }
    crearEquipo(nuevoEquipo)
  }

  return (
    <section className='formulario'>
      <form
        action=''
        onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          title='Nombre'
          placeholder='Ingresar Nombre'
          required
          value={nombre}
          setValue={setNombre}
        />
        <Campo
          title='Puesto'
          placeholder='Ingresar Puesto'
          required
          value={puesto}
          setValue={setPuesto}
        />
        <Campo
          title='Foto'
          placeholder='Ingresar enlace de la Foto'
          required
          value={foto}
          setValue={setFoto}
        />

        <ListaOpciones
          value={equipo}
          setValue={setEquipo}
          equipos={equipos}
        />

        <Boton>Crear</Boton>
      </form>

      <form
        action=''
        onSubmit={handleSubmitTeam}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo
          title='Título'
          placeholder='Ingresar Titulo'
          required
          value={titulo}
          setValue={setTitulo}
        />
        <Campo
          title='Color'
          placeholder='Ingresar el color en hexadecimal'
          required
          value={color}
          setValue={setColor}
          type='color'
        />
        <Boton>Registrar Equipo</Boton>
      </form>
    </section>
  )
}

Formulario.propTypes = {
  equipos: PropTypes.array.isRequired,
  registrarColaborador: PropTypes.func.isRequired,
  crearEquipo: PropTypes.func.isRequired,
}

export default Formulario
