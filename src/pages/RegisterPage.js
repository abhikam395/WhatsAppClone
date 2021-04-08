import React,{Component} from 'react';
import './register.scss';

import {Link} from 'react-router-dom';
import firebase from './../utils/Firebase';
import 'firebase/auth'


export default class RegisterPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: null,
            email: null,
            password: null,
            firebaseRef: firebase.database().ref("/users/"),
        }
        this.onNameChanged = this.onNameChanged.bind(this);
        this.onEmailChanged = this.onEmailChanged.bind(this);
        this.registerUser  = this.registerUser.bind(this);
        this.onPasswordChanged = this.onPasswordChanged.bind(this);
    }

    registerUser(event){
        event.preventDefault();
        let {email, password} = this.state;
        let {history } = this.props;

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
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
        
        // firebaseRef
        //     .orderByChild('email')
        //     .equalTo(email)
        //     .once("value", function(snapshot){
        //         //if user registered
        //         if(snapshot.val()){
        //             console.log('User already registered')
        //         }
        //         else{
        //             //register user if not registered
        //             firebaseRef.push().set({
        //                 name: name,
        //                 email: email,
        //                 password: password
        //             }).then(value => {
        //                 console.log('User registered');
        //                 firebaseRef.once('value', function(snapshot){
        //                     snapshot.forEach(child => {
        //                         console.log(child.key)
        //                     })
        //                 })
        //                 // history.push('/');
        //             }).catch(err => {
        //                 console.log(err);
        //             })
        //         }
        // })   
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
                            type="text"
                            className="register__input" 
                            onChange={this.onNameChanged}
                        />
                    </div>
                    <div className="register__box">
                        <label className="register__label">Email</label>
                        <input
                            type="email"
                            className="register__input" 
                            onChange={this.onEmailChanged}
                        />
                    </div>
                    <div className="register__box">
                        <label className="register__label">Password</label>
                        <input
                            type="password"
                            className="register__input" 
                            onChange={this.onPasswordChanged}
                        />
                    </div>
                    <button 
                        className="register__btn" 
                        onClick={this.registerUser}>
                        Register
                    </button>
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