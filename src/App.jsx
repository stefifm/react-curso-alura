import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import Formulario from './components/Formulario/Formulario'
import Header from './components/Header/Header'
import MiOrg from './components/MiOrg/MiOrg'
import Equipo from './components/Equipo'
import Footer from './components/Footer'

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(true)

  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      equipo: 'FrontEnd',
      foto: 'https://github.com/harlandlohora.png',
      nombre: 'Harland Lohora',
      puesto: 'Instructor',
      fav: false,
    },
    {
      id: uuidv4(),
      equipo: 'Programación',
      foto: 'https://github.com/genesysaluralatam.png',
      nombre: 'Genesys Rondón',
      puesto: 'Desarrolladora de software e instructora',
      fav: true,
    },
    {
      id: uuidv4(),
      equipo: 'UX y Diseño',
      foto: 'https://github.com/JeanmarieAluraLatam.png',
      nombre: 'Jeanmarie Quijada',
      puesto: 'Instructora en Alura Latam',
      fav: false,
    },
    {
      id: uuidv4(),
      equipo: 'Programación',
      foto: 'https://github.com/christianpva.png',
      nombre: 'Christian Velasco',
      puesto: 'Head de Alura e Instructor',
      fav: false,
    },
    {
      id: uuidv4(),
      equipo: 'Innovación y Gestión',
      foto: 'https://github.com/JoseDarioGonzalezCha.png',
      nombre: 'Jose Gonzalez',
      puesto: 'Dev FullStack',
      fav: false,
    },
  ])

  const [equipos, setEquipos] = useState([
    {
      id: uuidv4(),
      titulo: 'Programación',
      colorPrimario: '#57C278',
      colorSecundario: '#D9F7E9',
    },
    {
      id: uuidv4(),
      titulo: 'FrontEnd',
      colorPrimario: '#82CFFA',
      colorSecundario: '#E8F8FF',
    },
    {
      id: uuidv4(),
      titulo: 'Data Science',
      colorPrimario: '#A6D157',
      colorSecundario: '#F0F8E2',
    },
    {
      id: uuidv4(),
      titulo: 'DevOps',
      colorPrimario: '#E06B69',
      colorSecundario: '#FDE7E8',
    },
    {
      id: uuidv4(),
      titulo: 'UX y Diseño',
      colorPrimario: '#DB6EBF',
      colorSecundario: '#FAE9F5',
    },
    {
      id: uuidv4(),
      titulo: 'Móvil',
      colorPrimario: '#FFBA05',
      colorSecundario: '#FFF5D9',
    },
    {
      id: uuidv4(),
      titulo: 'Innovación y Gestión',
      colorPrimario: '#FF8A29',
      colorSecundario: '#FFEEDF',
    },
  ])

  // Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log('Nuevo colaborador ', colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador = (id) => {
    const nuevoColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    setColaboradores(nuevoColaboradores)
  }

  // Actualizar color del equipo

  const actualizarColorEquipo = (color, id) => {
    const nuevoEquipos = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })

    setEquipos(nuevoEquipos)
  }

  // Registrar un equipo

  const crearEquipo = (nuevoEquipo) => {
    console.log('Nuevo equipo creado: ', nuevoEquipo)
    setEquipos([...equipos, { id: uuidv4(), ...nuevoEquipo }])
  }

  const cambiarMostrarFormulario = () => {
    setMostrarFormulario(!mostrarFormulario)
  }

  // Like

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    setColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {mostrarFormulario && (
        <Formulario
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
          equipos={equipos.map((equipo) => equipo.titulo)}
        />
      )}

      <MiOrg cambiarMostrarFormulario={cambiarMostrarFormulario} />

      {equipos.map((equipo) => (
        <Equipo
          equipo={equipo.titulo}
          key={equipo.id}
          id={equipo.id}
          colorPrimario={equipo.colorPrimario}
          colorSecundario={equipo.colorSecundario}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColorEquipo={actualizarColorEquipo}
          like={like}
        />
      ))}

      <Footer />
    </div>
  )
}

export default App
