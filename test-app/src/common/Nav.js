import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../components/app.css";


export default class Header extends Component{
    
    render(){
        return(

            <div className="ui fixed inverted menu">
                <ul className="nav ui container" >
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Register</a>
                    </li>
                    <li className="nav-item">
                        <Link to={'/login'} className="nav-link" >Login</Link>
                    </li>
                </ul>
                

                <div className="aith-wrapper">
                    <div className="auth-inner bcColor">
                        <h1>You Are Login</h1>

                    </div>

                </div>
            </div>
            
        );
    }

}