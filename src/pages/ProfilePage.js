import React,{Component} from 'react';
import './profilepage.scss';

import image from './../assets/images/landingimg.jpg';
import firebase from './../utils/Firebase';
import 'firebase/database';

export default class ProfilePage extends Component{

    constructor(){
        super();
        this.state = {
            name: null,
            status: null,
            user: localStorage.getItem('user'),
        }

        this.changeUserName = this.changeUserName.bind(this);
        this.changeUserStatus = this.changeUserStatus.bind(this);
        this.submit = this.submit.bind(this);
    }   

    componentDidMount(){
        firebase.database().ref('/profiles/').once('value', function(snapshot){
            snapshot.forEach(child => {
                console.log(child.key)
            })
        })
    }

    changeUserName(event){
        this.setState({name: event.target.value})
    }

    changeUserStatus(event){
        this.setState({status: event.target.value})
    }

    submit(event){
        event.preventDefault();

        let {name, status, user} = this.state;
        let {userId} = JSON.parse(user);
        
        firebase.database().ref('/profiles/').child(userId).set({name: name, status: status});
    }

    render(){
        return (
            <div className="
                profilepage 
                profilepage--size 
                profilepage--theme">
                <div className="
                    profilepage__content 
                    profilepage__content--size">
                    <img src={image} alt="imag" className="profilepage__image" />
                    <form className="profilepage__form">
                        <div className="profilepage__row">
                            <label className="profilepage__label">Name</label>
                            <input
                                onChange={this.changeUserName}
                                className="profilepage__input" 
                                type="text"/>
                        </div>
                        <div className="profilepage__row">
                            <label className="profilepage__label">Status</label>
                            <textarea 
                                className="profilepage__status"
                                onChange={this.changeUserStatus}
                            />
                        </div>
                        <button
                            onClick={this.submit}
                            className="profilepage__button">
                            SAVE
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}