import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Profils from './Components/Profils';

import imageProfil1 from './profil-inconnu-femme.jpg';
import imageProfil2 from './profil-inconnu-femme.jpg';
import imageProfil3 from './profil-inconnu-femme.jpg';
import Publication from './Publication/Publication';


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
  