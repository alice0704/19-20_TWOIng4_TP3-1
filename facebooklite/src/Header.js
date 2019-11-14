import React from "react";
import './Header.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

class Header extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
      }

    render(){
        return(
            <div className="headerStyle">
                <Link to="/Jeanne"><h4 id="content"> <small className="text-white" className="espace">Jeanne</small></h4></Link>
                <Link to="/Martine"><h4 id="content"> <small className="text-white" className="espace">Martine</small></h4></Link>
                <Link to="/Claude"><h4 id="content"> <small className="text-white" className="espace">Claude</small></h4></Link>
            </div>
        );
    }

}

export default Header;