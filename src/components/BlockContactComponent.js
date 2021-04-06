import React, {Component} from 'react';
import './blockcontact.scss';

import {BiBlock} from 'react-icons/bi';

export default class BlockContactComponent extends Component{
    render(){
        return (
            <div className="blockcontact blockcontact--size blockcontact--theme">
                <BiBlock className="blockcontact__icon"/>
                <h3 className="blockcontact__label">Block</h3>
            </div>
        )
    }
}