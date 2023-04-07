import CampoTexto from '../CampoTexto'
import './Formulario.css'

function Formulario() {
  return (
    <section className='formulario'>
      <form action=''>
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
      </form>
    </section>
  )
}

export default Formulario
