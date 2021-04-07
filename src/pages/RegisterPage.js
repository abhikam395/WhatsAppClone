import React,{Component} from 'react';
import './register.scss';

import {Link} from 'react-router-dom';

export default class registerPage extends Component{

    constructor(){
        super();
        this.state = {
            name: null,
            email: null,
            password: null
        }
        this.onNameChanged = this.onNameChanged.bind(this);
        this.onEmailChanged = this.onEmailChanged.bind(this);
        this.onPasswordChanged = this.onPasswordChanged.bind(this);
    }

    onNameChanged(event){
        this.setState({name: event.target.value});
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
                register 
                register--size 
                register--theme">
                
                <h1 className="register__title">Register</h1>
                <form className="register__form register__form--size">
                    <div className="register__box">
                        <label className="register__label">Name</label>
                        <input 
                            className="register__input" 
                            onChange={this.onNameChanged}
                        />
                    </div>
                    <div className="register__box">
                        <label className="register__label">Email</label>
                        <input 
                            className="register__input" 
                            onChange={this.onEmailChanged}
                        />
                    </div>
                    <div className="register__box">
                        <label className="register__label">Password</label>
                        <input 
                            className="register__input" 
                            onChange={this.onPasswordChanged}
                        />
                    </div>
                    <Link className="register__btn" to="/">Register</Link>
                    <p className="register__para">Already have an account? 
                        <Link 
                            to="/login" 
                            className="register__link">
                            Sign in
                        </Link>
                    </p>
                </form>
            </section>
        )
    }
}