import { useRoutes, BrowserRouter } from 'react-router-dom'

import './App.css'
import Home from '../Home'
import Navbar from '../../Components/Navbar'
import { CartContextProvider } from "../../Context"
import Propietarios from '../Propietarios'
import Vehiculos from '../Vehiculos'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/vehiculos', element: <Vehiculos /> },
    { path: '/propietarios', element: <Propietarios /> },
    { path: '/*', element: <Home /> }
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

