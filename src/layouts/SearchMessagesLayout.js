import React from 'react';
import './searchmessages.scss';

import SearchMessageNavbar from './../components/SearchMessageNavbarComponent';
import SearchbarComponent from '../components/SearchbarComponent';

export default function SearchMessagesLayout({hide, title}){
    return (
        <section className="
            searchmessages 
            searchmessages--size 
            searchmessages--theme">
                <SearchMessageNavbar hide={hide} title={title}/>
                <div className="searchmessages__searchbar 
                    searchmessages__searchbar--size 
                    searchmessages__searchbar--theme">
                    <SearchbarComponent placeholder="Search..."/>
                </div>
                <span className="searchmessages__label">Search for messages with Abbu Kamboj.</span>
        </section>
    );
}