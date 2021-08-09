import Form from './Components/Form'
import {useState, useEffect} from 'react'
import Citas from './Components/Citas'

function App() {
  // Obtener local storage
  let citasIniciales= JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales){
    citasIniciales=[]
    
  }
  
    const [citas, guardarCitas] = useState(citasIniciales)
    const crearCitas = cita =>{
      guardarCitas([...citas, cita])
    }
    // guardar en local Storage
    useEffect(()=>{
      localStorage.setItem('citas',  JSON.stringify(citas))
    }, [citas])
    // funcion para elimnar cita
    const deleteCita = id=>{
      const newCita= citas.filter(cita=> cita.id !== id)
      guardarCitas(newCita)
  }
  //condicional citas
  const title= citas.length === 0 ? 'No hay citas' : 'Administra tus Citas'
  return (
    <>
      <h1>Administrador de Tareas</h1>
      <div className='container'>
        <div className='row'>
            <div className='one-half column'>
            <Form crearCitas={crearCitas}/>
            </div>
            <div className='one-half column'>
              <h1>{title}</h1>
              {
                citas.map(cita =>(
                  <Citas 
                  key={cita.id}
                  cita={cita}
                  deleteCita={deleteCita}
                  />
                ))
              }
            
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
