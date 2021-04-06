import React, {Component} from 'react';
import './chatareanavbar.scss';
import image from './../assets/images/landingimg.jpg';

import {HiOutlineSearch, HiDotsVertical} from 'react-icons/hi'
import ChatsOptionComponent from './ChatsOptionComponent';

export default class ChatAreaNavbarComponent extends Component{

    constructor(){
        super();
        this.state = {
            optionsVisible: false
        }
        this.toggleOptions = this.toggleOptions.bind(this);
        this.hideOptions = this.hideOptions.bind(this);
    }

    toggleOptions(){
        let {optionsVisible} = this.state;
        this.setState({optionsVisible: !optionsVisible});
    }

    hideOptions(){
        this.setState({optionsVisible: false});
    }

    render(){
        let {optionsVisible} = this.state;

        return (
            <nav className="
                chatareanavbar 
                chatareanavbar--size 
                chatareanavbar--theme">
                <div className="chatareanavbar__left">
                    <img src={image} className="chatareanavbar__image" alt="imag" />
                    <div className="chatareanavbar__info">
                        <h2 className="chatareanavbar__name">Ankush Negi</h2>
                        <span className="chatareanavbar__lastseen">last seen today at 4.46 PM</span>
                    </div>
                </div>
                <div className="chatareanavbar__right">
                    <HiOutlineSearch className="chatareanavbar__icon"/>
                    <HiDotsVertical className="chatareanavbar__icon" onClick={this.toggleOptions}/>
                    {optionsVisible && 
                        <div className="chatsareanavbar__options">
                            <ChatsOptionComponent hideOptions = {this.hideOptions}/>
                        </div>
                    }
                </div>
            </nav>
        )
    }
}