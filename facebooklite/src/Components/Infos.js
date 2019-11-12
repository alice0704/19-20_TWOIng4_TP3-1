import React from "react";

class Infos extends React.Component{
    render(){
        const infos = this.props.infos;
        return(
            <div>
                Prénom {infos.firstname}
                Nom {infos.surname}
                Date de naissance {infos.birthday}
            </div>
        );
}

}

export default Infos;