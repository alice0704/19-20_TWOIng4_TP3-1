import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Profils from './Components/Profils';

import imageProfil1 from './profil-inconnu-femme.jpg';
import imageProfil2 from './profil-inconnu-femme.jpg';
import imageProfil3 from './profil-inconnu-femme.jpg';
import Publication from './Publication/Publication';


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