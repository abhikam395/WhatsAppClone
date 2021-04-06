import React from 'react';
import './searchmessagenavbar.scss';

import {IoClose} from 'react-icons/io5';

export default function SearchMessageNavbarComponent({hide, title}){
    return (
        <nav className="
            searchmessagenavbar 
            searchmessagenavbar--size 
            searchmessagenavbar--theme">
            
            <IoClose className="searchmessagenavbar__icon" onClick={hide}/>
            <h3 className="searchmessagenavbar__title">{title}</h3>
        </nav>
    )
}