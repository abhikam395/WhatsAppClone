import React, {Component} from 'react';
import './container.scss';

import ChatAreaLayout from './../pages/ChatAreaPage';
import LandingPage from './../pages/LandingPage';
import RecentchatsSection from './../layouts/RecentChatsLayout';
import SelfProfileViewLayout from './../layouts/SelfProfileViewLayout';

import SearchMessagesLayout from './../layouts/SearchMessagesLayout';

import UserProfileLayout from './../layouts/UserProfileLayout';

import { RIGHTCONTAINERLAYOUTS, LEFTCONTAINERLAYOUTS } from '../utils/Constants';

export default class ContainerLayout extends Component {


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
                container 
                container--size 
                container--theme">
                <div className="
                    container__left 
                    container__left--size">
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
                    container__middle 
                    container__middle--size">
                    <ChatAreaLayout show={this.showRightContainer}/>
                </div>
                {rightContainerVisible && 
                    <div id="rightcontainer" 
                         className="
                            container__right
                            container__right--theme
                            container__right--size">
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