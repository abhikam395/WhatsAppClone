import React,{Component} from 'react';
import './login.scss';

import {Link} from 'react-router-dom';

export default class LoginPage extends Component{

    constructor(){
        super();
        this.state = {
            email: null,
            password: null
        }
        this.onEmailChanged = this.onEmailChanged.bind(this);
        this.onPasswordChanged = this.onPasswordChanged.bind(this);
    }

    onEmailChanged(event){
        this.setState({email: event.target.value});
    }

    onPasswordChanged(event){
        this.setState({password: event.target.value});
    }

    render(){
        return (
            <section className="
                login 
                login--size 
                login--theme">
                
                <h1 className="login__title">Login</h1>
                <form className="login__form login__form--size">
                    <div className="login__box">
                        <label className="login__label">Email</label>
                        <input 
                            className="login__input" 
                            onChange={this.onEmailChanged} 
                        />                    
                    </div>
                    <div className="login__box">
                        <label className="login__label">Password</label>
                        <input 
                            className="login__input" 
                            onChange={this.onPasswordChanged}
                        />
                    </div>
                    <a href="/#" 
                        className="login__forgetpassword">
                        Forget your password?
                    </a>
                    <Link className="login__btn" to="/">Login</Link>
                    <p className="login__para">
                        Don't have account? 
                        <Link 
                            to="/register" 
                            className="login__link">
                            Sign up
                        </Link>
                    </p>
                </form>
            </section>
        )
    }
}