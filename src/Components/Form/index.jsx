import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';

const Form = ({crearCitas})=>{
    const [cita, handleChange] =useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });
    const [error, updateError]= useState(false)
    const updateState = e =>{
        handleChange({
            ...cita, // si no coloca la copia, solo se podrá ver un elemento en este caso fecha propietario hora, etc
            [e.target.name] : e.target.value
        })
    }
    const {mascota, propietario,fecha, hora, sintomas} = cita
    const createMascota = e =>{
        e.preventDefault()
        //validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim()=== '' || hora.trim()=== '' || sintomas===''){
            updateError(true)
            return;  // Para que no se ejecute lo de abajo min.1:40 
        }
        //eliminar mensaje previo
        updateError(false)
        // ASIGNAR UN ID PARA LUEGO PEGAR EN OTRO LUGAR Y CADA ELEMENTO TIENE QUE SER ÚNICO
        const id= uuidv4();
        handleChange({...cita, id})
        
        //Crear Citas
        crearCitas({...cita, id})

        //reinciar los campos
        handleChange({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
        })
        
    }
    
    return(
        <>
            <h2>Crear Cita</h2>
            <form onSubmit={createMascota}>
                {error?<p className='alerta-error'>Rellenar todos los campos</p> :null }
                <label>Nombre de Mascota</label>
                <input 
                type='text'
                name='mascota'
                className='u-full-width'
                placeholder='Nombre de Mascota'
                onChange={updateState}
                value={mascota}
                />

                <label>Nombre de Dueño</label>
                <input 
                type='text'
                name='propietario'
                className='u-full-width'
                placeholder='Nombre de Dueño'
                onChange={updateState}
                value={propietario}
                />

                <label>Fecha</label>
                <input 
                type='date'
                name='fecha'
                className='u-full-width'
                onChange={updateState}
                value={fecha}
                />

                <label>Hora</label>
                <input 
                type='time'
                name='hora'
                className='u-full-width'
                onChange={updateState}
                value={hora}
                />

                <label>Síntomas</label>
                <textarea 
                className='u-full-width'
                name='sintomas'
                placeholder='descripcion'
                onChange={updateState}
                value={sintomas}
                />
                
                <button
                type='submit'
                className='u-full-width button-primary'
                  >Aregagar Cita</button>
            </form>
        </>
        
    )
}
export default Form