import React, {Component} from 'react';
import './chat.scss';

export default class ChatComponent extends Component{

    render(){
        let {sender, message, time} = this.props.chat;
        console.log(sender.id === 2)
        return (
            <li className={
                `chat 
                 chat--size 
                 chat--theme 
                 ${sender.id === 2 ? 'chat__self' : 'chat__other'}`
                }>
                <p className="chat__message">{message}</p>
                <span className="chat__time">{time}</span>
            </li>
        )
    }
}