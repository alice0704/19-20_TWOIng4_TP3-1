import React from "react";
import Infos from './Infos';
import PhotoProfil from './PhotoProfil';

class Profils extends React.Component{
    render(){

        const { infos, photoprofil } = this.props.profilsData;
        console.log(photoprofil)
        console.log(this.props.profilsData)
        return(
            <div>
                <PhotoProfil photoprofil={this.props.profilsData.image}/>
                <Infos infos={infos}/>
            </div>
        )
    }

}

export default Profils;