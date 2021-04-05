import React,{Component} from 'react';
import './chatslayout.scss';

import ChatComponent from '../components/ChatComponent';

export default class ChatsLayout extends Component{

    constructor(){
        super();
        this.state = {
            chats: [
                {id:1, sender: {id: 1, name: 'Abhi'}, message: 'asdfsf', time: '10:10 PM'},
                {id:2, sender: {id: 1, name: 'John'}, message: "iMessage is the Apple messaging service you get automatically with your Apple ID. If Messages asks you to sign in, use the same Apple ID that you use with Messages on your iPhone and other devices. It's usually the same Apple ID that you use for iCloud, the iTunes Store, the App Store, and the account you created when you first set up your Mac.", time: '10:10 PM'},
                {id:3, sender: {id: 2, name: 'Abhi'}, message: 'asdfsf', time: '10:10 PM'},
                {id:4, sender: {id: 3, name: 'Sanu'}, message: 'asdfsf', time: '10:10 PM'},
                {id:5, sender: {id: 1, name: 'Abhi'}, message: 'asdfsf', time: '10:10 PM'},
                {id:1, sender: {id: 1, name: 'Abhi'}, message: 'asdfsf', time: '10:10 PM'},
                {id:2, sender: {id: 1, name: 'John'}, message: "iMessage is the Apple messaging service you get automatically with your Apple ID. If Messages asks you to sign in, use the same Apple ID that you use with Messages on your iPhone and other devices. It's usually the same Apple ID that you use for iCloud, the iTunes Store, the App Store, and the account you created when you first set up your Mac.", time: '10:10 PM'},
                {id:3, sender: {id: 2, name: 'Abhi'}, message: 'asdfsf', time: '10:10 PM'},
                {id:4, sender: {id: 3, name: 'Sanu'}, message: 'asdfsf', time: '10:10 PM'},
                {id:5, sender: {id: 1, name: 'Abhi'}, message: 'asdfsf', time: '10:10 PM'},
                {id:1, sender: {id: 1, name: 'Abhi'}, message: 'asdfsf', time: '10:10 PM'},
                {id:2, sender: {id: 1, name: 'John'}, message: "iMessage is the Apple messaging service you get automatically with your Apple ID. If Messages asks you to sign in, use the same Apple ID that you use with Messages on your iPhone and other devices. It's usually the same Apple ID that you use for iCloud, the iTunes Store, the App Store, and the account you created when you first set up your Mac.", time: '10:10 PM'},
                {id:3, sender: {id: 2, name: 'Abhi'}, message: 'asdfsf', time: '10:10 PM'},
                {id:4, sender: {id: 3, name: 'Sanu'}, message: 'asdfsf', time: '10:10 PM'},
                {id:5, sender: {id: 1, name: 'Abhi'}, message: 'asdfsf', time: '10:10 PM'},
            ]
        }
    }

    renderChats(chats){
        return chats.map((chat) => (
            <ChatComponent chat={chat} key={chat.id}/>
        ))
    }

    render(){
        let {chats} = this.state;
        return (
            <section className="chatslayout chatslayout--size">
                <ul className="chats chats--size">
                    {this.renderChats(chats)}
                </ul>
            </section>
        )
    }
}