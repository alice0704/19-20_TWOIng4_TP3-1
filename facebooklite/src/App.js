import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Profils from './Components/Profils';

import imageProfil1 from './profil-inconnu-femme.jpg'



  
  const profil1 = {
    infos: {
      firstname: "Jeanne",
      surname: "Dupont",
      birthday: "06/05/1989"
    },
    image: {
      src: imageProfil1,
      alt : "Jeanne"
    }
  }


 class App extends React.Component{ 
  render(){
    return( 
    <div>
      <h2>Mon profil</h2>
      <Profils profilsData={profil1}/>
    </div>
    );
  }
}

export default App;
