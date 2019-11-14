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
            <row>
                <Link to="/Jeanne" className="link1">Jeanne</Link>
                <Link to="/Martine" className="link">Martine</Link>
                <Link to="/Claude" className="link">Claude</Link>
            </row>
        );
    }

}

export default Header;