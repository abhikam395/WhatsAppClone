import React,{Component} from 'react';
import './searchrecentchat.scss';

import {HiOutlineSearch} from 'react-icons/hi';

export default class SearchRecentChatComponent extends Component {
    render(){
        return (
            <section className="
                searchrecentchat 
                searchrecentchat--size 
                searchrecentchat--theme">

                <HiOutlineSearch className="searchrecentchat__icon"/>
                <input type="text" 
                    placeholder="Search or start new chat" 
                    className="searchrecentchat__input"/>
            </section>
        )
    }
}