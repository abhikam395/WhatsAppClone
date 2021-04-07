import React, {Component} from 'react';
import './recentchatsNavbar.scss';
import {FaUserCircle} from 'react-icons/fa';
import {BiMessageDetail} from 'react-icons/bi'
import {HiDotsVertical} from 'react-icons/hi';
import { LEFTCONTAINERLAYOUTS } from '../utils/Constants';

export default class RecentChatsNavbar extends Component{
    render(){
        return (
            <nav className="
                recentchatnavbar 
                recentchatnavbar--size 
                recentchatnavbar--theme">
                    <FaUserCircle className="recentchatnavbar__profile-icon" 
                        onClick={() => this.props.showProfile(LEFTCONTAINERLAYOUTS.PROFILEVIEW)}/>
                    <div className="recentchatnavbar__icons">
                        <BiMessageDetail className="recentchatnavbar__icon" />
                        <HiDotsVertical className="recentchatnavbar__icon" />
                    </div>
                </nav>
        )
    }
}