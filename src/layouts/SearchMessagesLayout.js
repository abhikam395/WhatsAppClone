import React, {Component} from 'react';
import './searchmessages.scss';

import SearchMessageNavbar from './../components/SearchMessageNavbarComponent';

export default class SearchMessagesLayout extends Component {
    render(){
        return (
            <section className="
                searchmessages 
                searchmessages--size 
                searchmessages--theme">
                
                <SearchMessageNavbar />
            </section>
        );
    }
}