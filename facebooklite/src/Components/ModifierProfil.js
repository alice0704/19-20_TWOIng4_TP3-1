import React from "react";
import './Profils.css';





class ModifierProfil extends React.Component{
    

    render(){
        return(
            <button onClick={this.changeColor}>Changer style</button>
        );
}

}

export default ModifierProfil;