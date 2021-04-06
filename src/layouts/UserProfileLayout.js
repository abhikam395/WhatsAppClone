import React from 'react';
import './userprofile.scss';

import SearchMessageNavbar from './../components/SearchMessageNavbarComponent';

export default function UserProfileLayout({hide, title}){
    return (
        <section className="
            userprofile 
            userprofile--size 
            userprofile--theme">

            <SearchMessageNavbar hide={hide} title={title}/>
            
        </section>
    )
}