import React, {Component} from 'react';
import './home.scss';

import ChatAreaLayout from './../pages/ChatAreaPage';
import RecentchatsSection from './../layouts/RecentChatsLayout';
import SelfProfileViewLayout from './../layouts/SelfProfileViewLayout';

import SearchMessagesLayout from './../layouts/SearchMessagesLayout';

import UserProfileLayout from './../layouts/UserProfileLayout';

import { RIGHTCONTAINERLAYOUTS, LEFTCONTAINERLAYOUTS } from '../utils/Constants';

export default class HomePage extends Component {


    constructor(){
        super();
        this.state = {
            rightContainerVisible: false,
            enabledRightContainer: RIGHTCONTAINERLAYOUTS.SEARCHMESSAGE,
            enabledLeftContainer: LEFTCONTAINERLAYOUTS.PROFILEVIEW,
        }
        this.showRightContainer = this.showRightContainer.bind(this);
        this.hideRightContainer = this.hideRightContainer.bind(this);
        this.showProfileContainer = this.showProfileContainer.bind(this);
        this.showRecentChatsContainer = this.showRecentChatsContainer.bind(this);
        console.log(localStorage.getItem('user'));
    }

    showProfileContainer(){
        this.setState({enabledLeftContainer: LEFTCONTAINERLAYOUTS.PROFILEVIEW});
    }

    showRecentChatsContainer(){
        this.setState({enabledLeftContainer: LEFTCONTAINERLAYOUTS.RECENTCHATS});
    }

    showRightContainer(layout){
        this.setState({
            rightContainerVisible: true, 
            enabledRightContainer: layout
        });
    }

    hideRightContainer(){
        this.setState({rightContainerVisible: false});
    }

    render(){
        let {
            rightContainerVisible, 
            enabledRightContainer, 
            enabledLeftContainer
        } = this.state;
        console.log(enabledLeftContainer)
        return (
            <div className="
                home 
                home--size 
                home--theme">
                <div className="
                    home__left 
                    home__left--size">
                    {
                        enabledLeftContainer === LEFTCONTAINERLAYOUTS.RECENTCHATS && 
                        <RecentchatsSection showProfile={this.showProfileContainer}/>
                    }
                    {
                        enabledLeftContainer === LEFTCONTAINERLAYOUTS.PROFILEVIEW && 
                        <SelfProfileViewLayout showRecentChats={this.showRecentChatsContainer}/>
                    }
                </div>
                <div className="
                    home__middle 
                    home__middle--size">
                    <ChatAreaLayout show={this.showRightContainer}/>
                </div>
                {rightContainerVisible && 
                    <div id="rightcontainer" 
                         className="
                            home__right
                            home__right--theme
                            home__right--size">
                            {
                                enabledRightContainer === RIGHTCONTAINERLAYOUTS.SEARCHMESSAGE && 
                                <SearchMessagesLayout
                                    hide={this.hideRightContainer} 
                                    title="Search..."
                                />
                            }
                            {
                                enabledRightContainer === RIGHTCONTAINERLAYOUTS.USERPROFILE &&
                                <UserProfileLayout 
                                    hide={this.hideRightContainer} 
                                    title="Contact info"
                                />
                            }
                            
                    </div>
                }
            </div>
        )
    }
}