import React, {Component} from "react";

export default class Header extends Component{
    
    render(){
        return(

            <div className="ui fixed inverted menu">
                <ul class="nav ui container" >
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Register</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled">Login</a>
                    </li>
                </ul>
                {/* <div className="ui container">
                    <a href="/#" className="header item">
                        React Js CRUD With Laravel Api By Abdullah Al Muhid
                    </a>
                </div> */}
            </div>
            
        );
    }

}