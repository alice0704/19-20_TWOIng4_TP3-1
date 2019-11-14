import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profils from './Components/Profils';
import imageProfil2 from './Martine.jpg';


const profil2 = {
    infos: {
      firstname: "Martine",
      surname: "Dupont",
      birthday: "06/05/1989",
      nbColor: 0
    },
    image: {
      src: imageProfil2,
      alt : "Martine"
    },
    publication: {
      msg : "salut c martine"
    }
  }

class Martine extends React.Component{ 
  
    render(){
      return( 
      <div>
    
      
         <Profils profilsData={profil2}/>
       
    
      </div>
      );
    }
  }
  
  export default Martine;
  