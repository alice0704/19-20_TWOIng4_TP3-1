import React from "react";
import './Profils.css';

class Infos extends React.Component{
    render(){
        const infos = this.props.infos;
        return(
            <div>
                <div>
                    <br/>Prénom : {infos.firstname}<br/>
                    Nom : {infos.surname}<br/>
                </div>
                    Date de naissance : {infos.birthday}
            </div>
        );
}

}

export default Infos;