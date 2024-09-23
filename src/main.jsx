import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Footer from './componentes/Footer.jsx'
import Header from './componentes/Header.jsx'
import './index.css'

const rutas = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: (<div>Error cargando ruta</div>)
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={rutas}/>
    <Footer/>
  </StrictMode>,
)
