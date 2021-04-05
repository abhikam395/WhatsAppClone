import React,{Component} from 'react';
import './chatarea.scss';

import ChatsLayout from './../layouts/ChatsLayout';
import ChatAreaNavbar from './../components/ChatAreaNavbarComponent';
import ChatAreaBottomComponent from './../components/ChatAreaBottomComponent';

export default class ChatAreaPage extends Component{
    render(){
        return(
            <section className="
                chatarea 
                chatarea--size 
                chatarea--theme">
                
                <ChatAreaNavbar />
                <ChatsLayout />
                <ChatAreaBottomComponent />
            </section>
        )
    }
}