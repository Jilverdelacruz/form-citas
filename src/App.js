import Form from './Components/Form'
import {useState} from 'react'
import Citas from './Components/Citas'

function App() {
    const [citas, guardarCitas] = useState([])
    const crearCitas = cita =>{
      guardarCitas([...citas, cita])
    }
  
    // funcion que tome las  citas actuales y aregue la nueva
  return (
    <>
      <h1>Administrador de Tareas</h1>
      <div className='container'>
        <div className='row'>
            <div className='one-half column'>
            <Form crearCitas={crearCitas}/>
            </div>
            <div className='one-half column'>
              <h1>Administra Tus Citas</h1>
              {
                citas.map(cita =>(
                  <Citas cita={cita}/>
                ))
              }
            
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
