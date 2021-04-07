import React, {Component} from 'react';
import './profileabout.scss';

import {MdModeEdit} from 'react-icons/md';
import {FaCheck} from 'react-icons/fa';

export default class ProfileAboutComponent extends Component{

    constructor(){
        super();
        this.state = {
            editable: false,
            status: 'Hey there! I am using WhatsApp.'
        }
        this.onStatusChange =  this.onStatusChange.bind(this);
        this.toggleEditOption = this.toggleEditOption.bind(this);
    }

    toggleEditOption(){
        let {editable} = this.state;
        this.setState({editable: !editable});
    }

    onStatusChange(event){
        this.setState({status: event.target.value});
    }

    render(){
        let {editable, status} = this.state;

        return (
            <div className="
                profileabout 
                profileabout--size 
                profileabout--theme">
                
                <span className="profileabout__description">This is not your username or pin. 
                    This name will be visible to your WhatsApp contacts.</span>
                <h4 className="profileabout__label">About</h4>
                <div className="profileabout__row">
                    {!editable && 
                        <div className="profileabout__row">
                          <h2 className="profileabout__title">{status}</h2>
                          <MdModeEdit className="profileabout__editicon" onClick={this.toggleEditOption}/>
                      </div>
                    }
                    {editable &&
                         <div className="profileabout__row">
                         <input value={status} 
                                 onChange={this.onStatusChange}
                                 className="profileabout__input" />
                         <FaCheck className="profileabout__editicon" onClick={this.toggleEditOption}/>
                     </div>
                    }
                </div>
            </div>
        )
    }
}