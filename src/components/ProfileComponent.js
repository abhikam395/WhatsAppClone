import React,{Component} from 'react';
import './profile.scss';

import {FaUserCircle} from 'react-icons/fa';
import {MdModeEdit} from 'react-icons/md';
import {FaCheck} from 'react-icons/fa';


export default class ProfileComponent extends Component{

    constructor(){
        super();
        this.state = {
            editable: false,
            name: 'abhikam395'
        }
        this.onStatusChange =  this.onStatusChange.bind(this);
        this.toggleEditOption = this.toggleEditOption.bind(this);
    }

    toggleEditOption(){
        let {editable} = this.state;
        this.setState({editable: !editable});
    }

    onStatusChange(event){
        this.setState({name: event.target.value});
    }

    render(){
        let {editable, name} = this.state;

        return (
            <div className="
                profile 
                profile--size 
                profile--theme">

                <FaUserCircle className="profile__usericon"/>
                <div className="profile__info">
                    <span className="profile__label">Your Name</span>
                    {!editable && 
                        <div className="profileabout__row">
                            <h3 className="profile__name">{name}</h3>
                            <MdModeEdit className="profile__editicon" onClick={this.toggleEditOption}/>
                      </div>
                    }
                    {editable &&
                         <div className="profileabout__row">
                         <input value={name} 
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