import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario/Formulario'
import Header from './components/Header/Header'
import MiOrg from './components/MiOrg/MiOrg'

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(true)
  const cambiarMostrarFormulario = () => {
    setMostrarFormulario(!mostrarFormulario)
  }
  return (
    <div>
      <Header />
      {mostrarFormulario && <Formulario />}
      <MiOrg cambiarMostrarFormulario={cambiarMostrarFormulario} />
    </div>
  )
}

export default App
