import React from "react";

class PhotoProfil extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        
    }
    render(){

        //const photoprofil  = this.props;
       // const { src, alt } = photoprofil;
        console.log(this.props.photoprofil.src);
        //console.log(src)

        return(
            <div>
                <img src={this.props.photoprofil.src} alt={this.props.photoprofil.alt}/>
            </div>
        );
    }

}

export default PhotoProfil;