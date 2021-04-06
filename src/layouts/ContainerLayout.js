import React, {Component} from 'react';
import './container.scss';

import ChatAreaLayout from './../pages/ChatAreaPage';
import LandingPage from './../pages/LandingPage';
import RecentchatsSection from './../layouts/RecentChatsLayout';
import SearchMessagesLayout from './../layouts/SearchMessagesLayout';

import UserProfileLayout from './../layouts/UserProfileLayout';
import { RIGHTCONTAINERLAYOUTS } from '../utils/Constants';

export default class ContainerLayout extends Component {


    constructor(){
        super();
        this.state = {
            rightContainerVisible: false,
            enableRightContainer: RIGHTCONTAINERLAYOUTS.SEARCHMESSAGE
        }
        this.showRightContainer = this.showRightContainer.bind(this);
        this.hideRightContainer = this.hideRightContainer.bind(this);
    }

    showRightContainer(layout){
        this.setState({
            rightContainerVisible: true, 
            enableRightContainer: layout
        });
    }

    hideRightContainer(){
        this.setState({rightContainerVisible: false});
    }

    render(){
        let {rightContainerVisible, enableRightContainer} = this.state;
        return (
            <div className="
                container 
                container--size 
                container--theme">
                <div className="
                    container__left 
                    container__left--size">
                    <RecentchatsSection />
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
                                enableRightContainer === RIGHTCONTAINERLAYOUTS.SEARCHMESSAGE && 
                                <SearchMessagesLayout
                                    hide={this.hideRightContainer} 
                                    title="Search..."
                                />
                            }
                            {
                                enableRightContainer === RIGHTCONTAINERLAYOUTS.USERPROFILE &&
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