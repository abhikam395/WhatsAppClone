import React, {Component} from 'react';
import './chatareabottom.scss';

import {HiOutlineEmojiHappy} from 'react-icons/hi';
import {ImAttachment} from 'react-icons/im';
import {TiMicrophone} from 'react-icons/ti';
import {IoSend} from 'react-icons/io5';

export default class ChatAreaBottomComponent extends Component{

    constructor(){
        super();
        this.state = {
            message: null
        }
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        let value = event.target.value;
        this.setState({message: value})
    }

    render(){
        let {message} = this.state;
        return (
            <section className="
                chatareabottom 
                chatareabottom--size 
                chatareabottom--theme">
                <HiOutlineEmojiHappy 
                    className="
                        chatareabottom__icon 
                        chatareabottom__emojiicon"/>
                <ImAttachment className="chatareabottom__icon"/>
                <input 
                    onChange={this.onInputChange}
                    type="text" 
                    placeholder="Type a message" 
                    className="
                        chatareabottom__input 
                        chatareabottom__input--size 
                        chatareabottom__input--theme"/>
                {!message && <TiMicrophone className="chatareabottom__icon"/>}
                {message && <IoSend className="chatareabottom__icon" />}
            </section>
        )
    }
}