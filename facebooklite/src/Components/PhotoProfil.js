import React from "react";

class PhotoProfil extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        
    }
    render(){

        const photoprofil  = this.props;
        const { src, alt } = photoprofil;

        return(
            <div>
                <img src={src} alt={alt}/>
            </div>
        );
    }

}

export default PhotoProfil;