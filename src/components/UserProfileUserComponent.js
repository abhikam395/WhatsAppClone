import React,{Component} from 'react';
import './userprofileuser.scss';

import image from './../assets/images/landingimg.jpg';

export default class UserProfileUserComponent extends Component{
    render(){
        return (
            <div className="
                userprofileuser 
                userprofileuser--size 
                userprofileuser--theme">
                <img src={image} className="userprofileuser__image" alt="imag"/>
                <div className="userprofileuser__info">
                    <h2 className="userprofileuser__name">Ankush Negi</h2>
                    <span className="userprofileuser__lastseen">
                        last seen today at 4:40 PM
                    </span>
                </div>
            </div>
        )
    }
}