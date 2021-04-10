import React, {Component} from 'react';
import './container.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import HomePage from './../pages/HomePage';
import RegisterPage from './../pages/RegisterPage';
import LoginPage from './../pages/LoginPage';
import ProfilePage from './../pages/ProfilePage';

export default class ContainerLayout extends Component {

    render(){
        return (
            <div className="
                container 
                container--size 
                container--theme">

                <Router>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/register" exact component={RegisterPage} />
                        <Route path="/login" exact component={LoginPage} />
                        <Route path="/profile" exact component={ProfilePage}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}