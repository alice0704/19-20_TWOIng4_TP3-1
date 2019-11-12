import React from "react";
import './Header.css';

class Header extends React.Component{
    render(){
        return(
            <div className="headerStyle">
                <button className= "nav">Jeanne</button>
                <button className="nav">Martine</button>
                <button className="nav">Claude</button>
            </div>
        );
    }

}

export default Header;