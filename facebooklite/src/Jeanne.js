import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Profils from './Components/Profils';

import imageProfil1 from './profil-inconnu-femme.jpg';
import imageProfil2 from './profil-inconnu-femme.jpg';
import imageProfil3 from './profil-inconnu-femme.jpg';
import Publication from './Publication/Publication';


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
  