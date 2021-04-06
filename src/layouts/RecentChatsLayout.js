import React, {Component} from 'react';
import './recentchats.scss';

import RecentChatsNavbar from './../components/RecentChatsNavBar';
import SearchbarComponent from '../components/SearchbarComponent';
import RecentChatList from './../components/RecentChatsList';

export default class RecentChatsLayout extends Component {
    render(){
        return (
            <section className="
                recentchatsSection 
                recentchatsSection--size 
                recentchatsSection--theme">
                <RecentChatsNavbar />
                <SearchbarComponent placeholder="Search or start new chat" />
                <RecentChatList />
            </section>
        )
    }
}