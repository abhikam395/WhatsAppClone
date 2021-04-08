import React,{Component} from 'react';
import './login.scss';

import {Link} from 'react-router-dom';
import firebase from './../utils/Firebase';
import 'firebase/database'

export default class LoginPage extends Component{

    constructor(){
        super();
        this.state = {
            email: null,
            password: null,
        }
        this.onEmailChanged = this.onEmailChanged.bind(this);
        this.onPasswordChanged = this.onPasswordChanged.bind(this);
        this.loginUser  = this.loginUser.bind(this);

    }

    loginUser(event){
        event.preventDefault();
        let {email, password} = this.state;
        let {history } = this.props;
        
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                let userObject = {
                    userId: user.uid,
                    email: user.email,
                }
                localStorage.setItem('user', userObject);
                history.push('/');
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;            
                console.log(errorCode)
                console.log(errorMessage)

            })
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
                            type="email"
                            className="login__input" 
                            onChange={this.onEmailChanged} 
                        />                    
                    </div>
                    <div className="login__box">
                        <label className="login__label">Password</label>
                        <input
                            type="password"
                            className="login__input" 
                            onChange={this.onPasswordChanged}
                        />
                    </div>
                    <a href="/#" 
                        className="login__forgetpassword">
                        Forget your password?
                    </a>
                    <button 
                        className="login__btn" 
                        onClick={this.loginUser}>
                        Login
                    </button>
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