import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario/Formulario'
import Header from './components/Header/Header'
import MiOrg from './components/MiOrg/MiOrg'
import Equipo from './components/Equipo'
import Footer from './components/Footer'

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(true)
  // const [colaboradores, setColaboradores] = useState([], () => {
  //   const localData = localStorage.getItem('colaboradores')
  //   return localData ? JSON.parse(localData) : []
  // })

  const [colaboradores, setColaboradores] = useState([
    {
      equipo: 'FrontEnd',
      foto: 'https://github.com/harlandlohora.png',
      nombre: 'Harland Lohora',
      puesto: 'Instructor',
    },
    {
      equipo: 'Programación',
      foto: 'https://github.com/genesysaluralatam.png',
      nombre: 'Genesys Rondón',
      puesto: 'Desarrolladora de software e instructora',
    },
    {
      equipo: 'UX y Diseño',
      foto: 'https://github.com/JeanmarieAluraLatam.png',
      nombre: 'Jeanmarie Quijada',
      puesto: 'Instructora en Alura Latam',
    },
    {
      equipo: 'Programación',
      foto: 'https://github.com/christianpva.png',
      nombre: 'Christian Velasco',
      puesto: 'Head de Alura e Instructor',
    },
    {
      equipo: 'Innovación y Gestión',
      foto: 'https://github.com/JoseDarioGonzalezCha.png',
      nombre: 'Jose Gonzalez',
      puesto: 'Dev FullStack',
    },
  ])

  const [equipos, setEquipos] = useState([
    {
      titulo: 'Programación',
      colorPrimario: '#57C278',
      colorSecundario: '#D9F7E9',
    },
    {
      titulo: 'FrontEnd',
      colorPrimario: '#82CFFA',
      colorSecundario: '#E8F8FF',
    },
    {
      titulo: 'Data Science',
      colorPrimario: '#A6D157',
      colorSecundario: '#F0F8E2',
    },
    {
      titulo: 'DevOps',
      colorPrimario: '#E06B69',
      colorSecundario: '#FDE7E8',
    },
    {
      titulo: 'UX y Diseño',
      colorPrimario: '#DB6EBF',
      colorSecundario: '#FAE9F5',
    },
    {
      titulo: 'Móvil',
      colorPrimario: '#FFBA05',
      colorSecundario: '#FFF5D9',
    },
    {
      titulo: 'Innovación y Gestión',
      colorPrimario: '#FF8A29',
      colorSecundario: '#FFEEDF',
    },
  ])

  // Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log('Nuevo colaborador ', colaborador)
    setColaboradores([...colaboradores, colaborador])
    // localStorage.setItem('colaboradores', JSON.stringify([...colaboradores, colaborador]))
  }

  // const item = JSON.parse(localStorage.getItem('colaboradores'))

  const eliminarColaborador = (colaborador) => {
    console.log('eliminar colaborador')
  }

  // Actualizar color del equipo

  const actualizarColorEquipo = (color, titulo) => {
    const nuevoEquipos = equipos.map((equipo) => {
      if (equipo.titulo === titulo) {
        equipo.colorPrimario = color
      }
      return equipo
    })

    setEquipos(nuevoEquipos)
  }

  const cambiarMostrarFormulario = () => {
    setMostrarFormulario(!mostrarFormulario)
  }

  return (
    <div>
      <Header />
      {mostrarFormulario && (
        <Formulario
          registrarColaborador={registrarColaborador}
          equipos={equipos.map((equipo) => equipo.titulo)}
        />
      )}

      <MiOrg cambiarMostrarFormulario={cambiarMostrarFormulario} />

      {equipos.map((equipo) => (
        <Equipo
          equipo={equipo.titulo}
          key={equipo.titulo}
          colorPrimario={equipo.colorPrimario}
          colorSecundario={equipo.colorSecundario}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColorEquipo={actualizarColorEquipo}
        />
      ))}

      <Footer />
    </div>
  )
}

export default App
