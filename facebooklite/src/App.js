import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Profils from './Components/Profils';
import Jeanne from './Jeanne';
import Martine from './Martine';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import imageProfil1 from './profil-inconnu-femme.jpg';
import imageProfil2 from './profil-inconnu-femme.jpg';
import imageProfil3 from './profil-inconnu-femme.jpg';
import Publication from './Publication/Publication';


  /*const couleurs = ["red", "blue", "yellow"];*/
  
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
    }
  }

  const profil2 = {
    infos: {
      firstname: "Martine",
      surname: "XXX",
      birthday: "01/01/1981",
      nbColor: 0
    },
    image: {
      src: imageProfil2,
      alt : "Martine"
    }
  }

  const profil3 = {
    infos: {
      firstname: "Claude",
      surname: "YYY",
      birthday: "02/02/1982",
      nbColor: 0
    },
    image: {
      src: imageProfil3,
      alt : "Claude"
    }
  }


 class App extends React.Component{ 

  /*handleClickColor() {
    this.state.infos.nbColor++;
    this.forceUpdate;
  }*/

  render(){
    return( 
    <BrowserRouter>
    <div>
      <Header/>
      
      <Route path="/Jeanne" component={Jeanne}/>
      <Route path="/Martine" component={Martine}/>
       {/*
      <div>
       <Profils profilsData={profil1}/>
      </div>
*/
    }
    
    </div>
    </BrowserRouter>
    );
  }
}

export default App;
