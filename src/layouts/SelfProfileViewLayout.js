import React, {Component} from 'react';
import './selfprofileview.scss';

import ProfileComponent from './../components/ProfileComponent';
import ProfileAboutComponent from './../components/ProfileAboutComponent';
import ProfileNavbarComponent from './../components/ProfileNavbarComponent';

export default class SelfProfileViewLayout extends Component{
    render(){
        return (
            <aside className="
                selfprofileview 
                selfprofileview--size 
                selfprofileview--theme">

                <ProfileNavbarComponent 
                    showRecentChats={this.props.showRecentChats}
                />
                <ProfileComponent />
                <hr className="selfprofileview__line" />
                <ProfileAboutComponent />
                <hr className="selfprofileview__line" />

            </aside>
        )
    }
}