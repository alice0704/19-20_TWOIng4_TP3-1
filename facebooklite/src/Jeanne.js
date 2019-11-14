import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profils from './Components/Profils';
import imageProfil1 from './Jeanne.jpg';



const profil1 = {
    infos: {
      firstname: "Jeanne",
      surname: "Dupont",
      birthday: "06/05/1989",
      nbColor: 0
    },
    image: {
      src: imageProfil1,
      alt : "Jeanne"
    },
    publication : {
      msg : "Salut c jeanne"

    }
  }

class Jeanne extends React.Component{ 
  
    render(){
      return( 
      <div>
    
      
         <Profils profilsData={profil1}/>
       
    
      </div>
      );
    }
  }
  
  export default Jeanne;
  