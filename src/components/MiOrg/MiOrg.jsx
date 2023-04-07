import PropTypes from 'prop-types'
import './MiOrg.css'

function MiOrg({ cambiarMostrarFormulario }) {
  // const [mostrar, setMostrar] = useState(true)

  // const manejarClick = () => {
  //   console.log('Mostrar/Ocultar formulario')
  //   setMostrar(!mostrar)
  // }
  return (
    <section className='org-section'>
      <h3 className='org-title'>Mi Organización</h3>
      <img
        src='/img/add.png'
        alt='Add'
        onClick={cambiarMostrarFormulario}
      />
    </section>
  )
}

MiOrg.propTypes = {
  cambiarMostrarFormulario: PropTypes.func.isRequired,
}

export default MiOrg
