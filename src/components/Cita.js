import React from 'react';
import dog from '../components/img/dog.gif';
import patita from './img/patita.gif';
import doc from './img/doc.gif';


const Cita = ({cita, eliminarCita}) =>  ( 
    <div className="cita">
          <img src={dog} 
            width="60"
            height="60"
        />
        <p>Mascota: <span>{cita.mascota}
            <img class="image-replacement"src={patita} 
             /></span></p>
        <p>Dueño: <span>{cita.propietario} 
             <img class="image-replacement"src={patita} 
             /></span></p>
        <p>Fecha: <span>{cita.fecha} 
        <img class="image-replacement"src={patita} 
             /></span></p>
        <p>Hora: <span>{cita.hora}</span>
        <img class="image-replacement"src={patita} 
             /> </p>
        <p>Sintomas: <span>{cita.sintomas} <img class="image-replacement"src={patita} 
             /> </span></p>
      
        <button
            className="button eliminar u-full-width"
            onClick={() => eliminarCita(cita.id)}
        >Eliminar &times;</button>
    </div>
 );

 
export default Cita;