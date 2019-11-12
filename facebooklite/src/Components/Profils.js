import React from "react";
import Infos from './Infos';
import PhotoProfil from './PhotoProfil';

class Profils extends React.Component{
    render(){

        const { infos, photoprofil } = this.props.profilsData;
        
        return(
            <div>
                <PhotoProfil photoprofil={photoprofil}/>
                <Infos infos={infos}/>
            </div>
        )
    }

}

export default Profils;