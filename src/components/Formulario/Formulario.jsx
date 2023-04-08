import { useState } from 'react'
import Boton from '../Boton'
import CampoTexto from '../CampoTexto'
import ListaOpciones from '../ListaOpciones'

import './Formulario.css'

function Formulario() {
  const [nombre, setNombre] = useState('')
  const [puesto, setPuesto] = useState('')
  const [foto, setFoto] = useState('')
  const [equipo, setEquipo] = useState('')

  const manejarEnvio = (e) => {
    e.preventDefault()
    console.log('envio')
    const colaborador = {
      nombre,
      puesto,
      foto,
      equipo,
    }
    console.log(colaborador)
  }

  return (
    <section className='formulario'>
      <form
        action=''
        onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto
          title='Nombre'
          placeholder='Ingresar Nombre'
          required
          value={nombre}
          setValue={setNombre}
        />
        <CampoTexto
          title='Puesto'
          placeholder='Ingresar Puesto'
          required
          value={puesto}
          setValue={setPuesto}
        />
        <CampoTexto
          title='Foto'
          placeholder='Ingresar enlace de la Foto'
          required
          value={foto}
          setValue={setFoto}
        />

        <ListaOpciones
          value={equipo}
          setValue={setEquipo}
        />

        <Boton>Crear</Boton>
      </form>
    </section>
  )
}

export default Formulario
