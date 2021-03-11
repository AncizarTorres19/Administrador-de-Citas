import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';


function App() {

  // Citas en local storage
 // let citasIniciales = JSON.parse(localStorage.getItem('citas'));  
  //if (!citasIniciales){
 //   citasIniciales = [];
  //}

  // Arreglo de citas 
  const [citass, setCitass]= useState([]);

  // Use Effect para realizar algunas operaciones cuando el state cambia
  // useEffect(() => {
    // if(citasIniciales){
      // localStorage.setItem('citas', JSON.stringify(citass))
     //} else{
      //localStorage.setItem('citas', JSON.stringify([]));
     //}
   //}, [citass, citasIniciales ] ); 

  // Funcion que tome las citas actuales y agregue las nuevas 
  const crearCita = cita => {
    setCitass([
      ...citass,
      cita
    ]);
  }

  // Funcion que elimina una cita por su id
  const eliminarCita = id =>{
    const nuevasCitas = citass.filter(cita => cita.id !== id); 
    setCitass(nuevasCitas);
  }

  // Mensaje condicional
    //const [titulo, setTitulo] = useState("No hay citas")

    //const titulo = citass.length  ? 'No hay Citas'  : 'Administra tus Citas';
    //console.log(citass.length);
  

  return ( 
    
    <Fragment>
      
      <h1>Administracion de Pacientes</h1>
     
      
      <div className="container">
        <div className="row">
          <div className="one-half column">
               <Formulario
               crearCita={crearCita}
               />
          </div>
          <div className="one-half column" >
             {citass.length ?  
                 <h2>
                    Administra tu cita
                     </h2>
                      :
                       <h2>
                         No hay citas
                         </h2>  }             
                 {citass.map(cita => (
                 <Cita
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                  
                  
                 />
               
               ))}
          </div>
        </div> 
      </div>

    </Fragment>
  );
}
 
export default App;
