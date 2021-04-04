import React, {Component} from 'react';
import './recentchats.scss';

import RecentChatsNavbar from './../components/RecentChatsNavBar';
import SearchRecentChatComponent from './../components/SearchRecentChatComponent';
import RecentChatList from './../components/RecentChatsList';

export default class RecentChatsLayout extends Component {
    render(){
        return (
            <section className="
                recentchatsSection 
                recentchatsSection--size 
                recentchatsSection--theme">
                <RecentChatsNavbar />
                <SearchRecentChatComponent />
                <RecentChatList />
            </section>
        )
    }
}