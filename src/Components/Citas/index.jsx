
const Citas= ({cita, deleteCita}) =>{
    
    return(
        <div className='cita'>
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Propietario: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Síntomas: <span>{cita.sintomas}</span></p>
            <button className='eliminar u-full-width' onClick={()=>deleteCita(cita.id)}>Eliminar </button>
        </div>
    )
}
export default Citas