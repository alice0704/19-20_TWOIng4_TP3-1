import React from "react";
import Infos from './Infos';
import PhotoProfil from './PhotoProfil';
import './Profils.css';
import ModifierProfil from "./ModifierProfil";

class Profils extends React.Component{
    render(){

        const { infos, photoprofil } = this.props.profilsData;
        console.log(photoprofil)
        console.log(this.props.profilsData)
        return(
            
            <div className="affichage" >
                <PhotoProfil photoprofil={this.props.profilsData.image}/>
                <Infos infos={infos}/>
                    <div className="Bstyle">
                        <ModifierProfil/>
                    </div>
            </div>
            
        )
    }

}

export default Profils;