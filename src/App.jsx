import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
function App() {
  return (
    <div className='App'>
      <Header />
      <div>
        <a
          href='https://reactjs.org'
          target='_blank'
          rel='noreferrer'>
          <img
            src={reactLogo}
            className='logo react'
            alt='React logo'
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <p>HOLA MUNDO CON REACT</p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
