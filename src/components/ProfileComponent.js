import React,{Component} from 'react';
import './profile.scss';

import {FaUserCircle} from 'react-icons/fa';
import {MdModeEdit} from 'react-icons/md';

export default class ProfileComponent extends Component{
    render(){
        return (
            <div className="
                profile 
                profile--size 
                profile--theme">

                <FaUserCircle className="profile__usericon"/>
                <div className="profile__info">
                    <span className="profile__label">Your Name</span>
                    <div className="profile__row">
                        <h3 className="profile__name">abhikam395</h3>
                        <MdModeEdit className="profile__editicon" />
                    </div>
                </div>
                
            </div>
        )
    }
}