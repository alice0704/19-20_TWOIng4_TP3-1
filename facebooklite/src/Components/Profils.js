import React from "react";
import Infos from './Infos';
import PhotoProfil from './PhotoProfil';
import './Profils.css';

import Publication from '../Publication/Publication';

class Profils extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            couleur : 'white' 
        }
        this.newColor = this.newColor.bind(this);

        /*this.state = {
            super : 0
        }
        this.newLike = this.newLike.bind(this);*/
    }

    newColor(event){
        if (this.state.couleur === 'white'){
            this.setState({
                couleur : 'pink'
            })
        }
        if (this.state.couleur === 'pink'){
            this.setState({
                couleur : 'white'
            })
        }
    
}

/*newLike(event){
    this.setState({
        super: this.state.super +1
    });
}*/


    render(){

        const { infos, photoprofil, publication } = this.props.profilsData;

        console.log(photoprofil)
        console.log(this.props.profilsData)
        return(
            <div>
            <div className="affichage" style={{backgroundColor: this.state.couleur}}>
                <PhotoProfil photoprofil={this.props.profilsData.image}/>
                <Infos infos={infos}/><br></br>
                <button onClick={this.newColor} className="Bstyle">Changer style</button>
            </div>
            <div className="publi">
                <Publication publication={publication}/>
               
                
            </div>
            </div>
        )
    }

}

export default Profils;