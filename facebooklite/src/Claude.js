import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profils from './Components/Profils';
import imageProfil3 from './Claude.jpg';



const profil3 = {
    infos: {
      firstname: "Claude",
      surname: "Dupont",
      birthday: "06/05/1989",
    },
    image: {
      src: imageProfil3,
      alt : "Claude"
    },
    publication : {
      msg : "Salut c claude"

    }
  }

class Claude extends React.Component{ 
  
    render(){
      return( 
      <div>
    
      
         <Profils profilsData={profil3}/>
       
    
      </div>
      );
    }
  }
  
  export default Claude;