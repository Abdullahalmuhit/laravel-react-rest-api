import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "../components/Home";
import Nav from "./Nav";


export default class Header extends Component{
    
    render(){
        return(
            <Router>
                <div>
                   <Nav />
                    {/* <Switch>
                       <Route exact path="/" element={<Home/>}/>
                    </Switch> */}

                </div>
            </Router>


        );
    }

}