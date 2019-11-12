import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Profils from './Components/Profils';




  
  const profil1 = {
    infos: {
      firstname: "Jeanne",
      surname: "Dupont",
      birthday: "06/05/1989"
    },
    image: {
      src: 'profil-inconnu-femme.jpg',
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
