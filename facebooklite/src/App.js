import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Profils from './Components/Profils';
import Jeanne from './Jeanne';
import Martine from './Martine';
import Claude from './Claude';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import imageProfil1 from './profil-inconnu-femme.jpg';
import imageProfil2 from './profil-inconnu-femme.jpg';
import imageProfil3 from './profil-inconnu-femme.jpg';
import Publication from './Publication/Publication';
  

 class App extends React.Component{ 


  render(){
    return( 

    <BrowserRouter>
      <div>
        <Header/>
      
        <Route path="/Jeanne" component={Jeanne}/>
        <Route path="/Martine" component={Martine}/>
        <Route path="/Claude" component={Claude}/>        
    
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
