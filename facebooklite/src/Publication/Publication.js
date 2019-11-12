import React from "react";
import './Publication.css';
import Like from './Like.js';


class Publication extends React.Component{
    render(){
        return(
            <div className="publi">
                ma dernière publication blablablablabla
                <Like/>
            </div>

        );
}

}

export default Publication;