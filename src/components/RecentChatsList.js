import React, {Component} from 'react';
import './recentchatlist.scss';
import RecentChatComponent from './RecentChatComponent';

export default class RecentChatList extends Component {

    constructor(){
        super();
        this.state = {
            chats: [
                {id: 1, user: {id: 1, name: 'Ankush Negi'}, time: '6:04 PM', image: '', message: 'sdf'},
                {id: 2, user: {id: 2, name: 'Ankush Negi'}, time: '6:04 PM', image: '', message: 'sdf'},
                {id: 3, user: {id: 3, name: 'Ankush Negi'}, time: '6:04 PM', image: '', message: 'sdf'},
                {id: 4, user: {id: 4, name: 'Ankush Negi'}, time: '6:04 PM', image: '', message: 'sdf'}
            ]
        }
    }

    renderRecentChats(chats){
        return chats.map((chat, index) => (
            <RecentChatComponent 
                key={index} 
                chat={chat}/>
            )
        )
    }
    
    render(){
        let {chats} = this.state;
        return (
            <ul className="recentchats recentchats--size">
                {this.renderRecentChats(chats)}
            </ul>
        )
    }
}