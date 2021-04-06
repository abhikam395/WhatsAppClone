import React from 'react';
import './userprofile.scss';

import SearchMessageNavbar from './../components/SearchMessageNavbarComponent';
import UserProfileUserComponent from './../components/UserProfileUserComponent';
import AboutAndPhoneComponent from './../components/AboutAndPhoneComponent';
import DeleteChatComponent from './../components/DeleteChatComponent';
import ReportContactComponent from './../components/ReportContactComponent';
import BlockContactComponent from './../components/BlockContactComponent';

export default function UserProfileLayout({hide, title}){
    return (
        <section className="
            userprofile 
            userprofile--size 
            userprofile--theme">

            <SearchMessageNavbar hide={hide} title={title}/>
            <UserProfileUserComponent />
            <AboutAndPhoneComponent />
            <BlockContactComponent />
            <ReportContactComponent />
            <DeleteChatComponent />
        </section>
    )
}