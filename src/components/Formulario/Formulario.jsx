import Boton from '../Boton'
import CampoTexto from '../CampoTexto'
import ListaOpciones from '../ListaOpciones'

import './Formulario.css'

function Formulario() {
  const manejarEnvio = (e) => {
    e.preventDefault()
    console.log('envio')
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
        />
        <CampoTexto
          title='Puesto'
          placeholder='Ingresar Puesto'
        />
        <CampoTexto
          title='Foto'
          placeholder='Ingresar enlace de la Foto'
        />

        <ListaOpciones />

        <Boton>Crear</Boton>
      </form>
    </section>
  )
}

export default Formulario
