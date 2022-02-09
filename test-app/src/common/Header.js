import React, {Component} from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";


import Nav from "./Nav";


export default class Header extends Component{
    
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/' component={Nav} />
                        <Route path='/login' component={Login} />
                        <Route path='/register' component={Register} />



                   </Switch>
                </div>
            </BrowserRouter>


        );
    }

}