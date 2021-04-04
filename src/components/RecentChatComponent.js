import React,{Component} from 'react';
import './recentchat.scss';
import image from './../assets/images/landingimg.jpg';
import {RiArrowDropDownLine} from 'react-icons/ri';

export default class RecentChatComponent extends Component{

    constructor(){
        super();
        this.onHoverIn = this.onHoverIn.bind(this);
        this.onHoverOut = this.onHoverOut.bind(this);
    }

    //show more icon
    onHoverIn(id){
        let icon = document.getElementsByClassName('recentchat__moreicon')[id];
        icon.style.display = 'block';
    }

    //hide more icon
    onHoverOut(id){
        let icon = document.getElementsByClassName('recentchat__moreicon')[id];
        icon.style.display = 'none';
    }
    
    render(){
        let {id, user, message, time} = this.props.chat;
        return(
            <li className="recentchat recentchat--size" 
                onMouseEnter={this.onHoverIn.bind(this, id - 1)} 
                onMouseLeave={this.onHoverOut.bind(this, id - 1)}>
                <img src={image} className="recentchat__image" alt="imag"/>
                <div className="recentchat__right">
                    <div className="recentchat__data">
                        <h2 className="recentchat__name">{user.name}</h2>
                        <p className="recentchat__message">{message}</p>
                    </div>
                    <div className="recentchat__end">
                        <span className="recentchat__time">{time}</span>
                        <RiArrowDropDownLine className="recentchat__moreicon"/>
                    </div>
                </div>
            </li>
        )
    }
}