import React,{Component} from 'react';
import './profilenavbar.scss';

import {IoMdArrowBack} from 'react-icons/io';

export default class ProfileNavbarComponent extends Component{
    render(){
        return (
            <nav className="
                profilenavbar 
                profilenavbar--size 
                profilenavbar--theme">
                <IoMdArrowBack 
                    className="profilenavbar__icon" 
                    onClick={() => this.props.showRecentChats()}
                />

                <h2 className="profilenavbar__title">Profile</h2>
            </nav>
        )
    }
}