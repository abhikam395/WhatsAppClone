import React, {Component } from 'react';
import './chatsoption.scss';

export default class ChatsOptionComponent extends Component{

    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            options: [
                { id: 1, name: 'Contact info'},
                { id: 2, name: 'Select messages'},
                { id: 3, name: 'Mute notifications'},
                { id: 4, name: 'Clear messages'},
                { id: 5, name: 'Delete chat'},
            ]
        }
        this.onOptionSelected = this.onOptionSelected.bind(this);
    }

    renderList(options){
        return options.map(option => <li className="
            chatsoptions__item
            chatsoptions__item--size"
            onClick={this.onOptionSelected.bind(this, option)}
            key={option.id}>
                {option.name}
            </li>)
    }

    onOptionSelected(option){
        console.log(option)
        this.props.hideOptions();
    }

    render(){
        let {options} = this.state;
        return (
            <div className="
                chatsoptions 
                chatsoptions--size 
                chatsoptions--theme"
                id="chatsoptions">
                <ul className="chatsoptions__list">
                    {this.renderList(options)}
                </ul>
            </div>
        )
    }
}