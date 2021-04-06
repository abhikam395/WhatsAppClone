import React,{Component} from 'react';
import './searchbar.scss';

import {HiOutlineSearch} from 'react-icons/hi';

export default class SearchRecentChatComponent extends Component {

    render(){
        let {placeholder} = this.props;

        return (
            <section className="
                searchrecentchat 
                searchrecentchat--size 
                searchrecentchat--theme">

                <HiOutlineSearch className="searchrecentchat__icon"/>
                <input type="text" 
                    placeholder={placeholder} 
                    className="searchrecentchat__input"/>
            </section>
        )
    }
}