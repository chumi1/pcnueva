import './App.css'
import {useNavigate} from "react-dom";
import { traeInfoServicio} from "./servicios/ServiciosApi";
import { useEffect, useState } from 'react';

function App() {

  const [dolares, setDolares] = useState([]);

  useEffect(()=>{
    traeInfo();
    console.log(dolares);
  },[])

  function traeInfo() {
    traeInfoServicio().then((respuesta) =>{
      setDolares(respuesta.data);
  }).catch(error=>{
    console.error(error);
  })
 }

  return (
    <>
      <div>hola mundo</div>
      <table>
        <thead>
          <tr>
            <th>Moneda</th>
            <th>Casa</th>
            <th>Nombre</th>
            <th>Compra</th>
            <th>Venta</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {
                dolares.map(dolar => 
                <tr key={dolar.casa}>
                  <td>{dolar.moneda}</td>
                  <td>{dolar.casa}</td>

                </tr>
              )
          }
        </tbody>
      </table>
    </>
  )
}

export default App
