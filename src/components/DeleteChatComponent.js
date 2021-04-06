import React, {Component} from 'react';
import './deletechat.scss';

import {MdDelete} from 'react-icons/md';

export default class DeleteChatComponent extends Component{
    
    render(){
        return (
            <div className="deletechat deletechat--size deletechat--theme">
                <MdDelete className="deletechat__icon"/>
                <h3 className="deletechat__label">Delete chat</h3>
            </div>
        )
    }
}