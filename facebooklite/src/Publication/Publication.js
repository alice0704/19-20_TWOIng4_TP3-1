import React from "react";
import './Publication.css';
import Like from './Like.js';
//import Profils from './Components/Profils';


class Publication extends React.Component{
    render(){
        const publication = this.props.publication;
        return(
            <div>
                
                <p>  Message : {publication.msg}</p> 
            </div>

        );
}

}

export default Publication;