import { useRoutes, BrowserRouter } from 'react-router-dom'

import './App.css'
import Home from '../Home'
import Contact from '../Contact'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'
import { CartContextProvider } from "../../Context"
import Propietarios from '../Propietarios'
import Vehiculos from '../Vehiculos'

/*import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'*/

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/Contacto', element: <Contact /> },
    { path: '/propietarios', element: <Propietarios /> },
    { path: '/vehiculos', element: <Vehiculos /> },
    { path: '/*', element: <NotFound /> }
  ])
  return routes
}

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </CartContextProvider>
  )
}
export default App;

/*
function App2() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}*/

