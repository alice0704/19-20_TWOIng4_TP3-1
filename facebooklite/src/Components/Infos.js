import React from "react";

class Profils extends React.Component{
    render(){
        return(
            <div>
               Prénom {this.props.firstname}
               Nom {this.props.surname}
               Date de naissance {this.props.birthday}
            </div>
        );
}

}

export default Profils;