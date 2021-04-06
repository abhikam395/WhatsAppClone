import React, {Component} from 'react';
import './aboutnphone.scss';

export default class AboutAndPhoneComponent extends Component{
    render(){
        return (
            <div className="aboutnphone aboutnphone--size aboutnphone--theme">
                <span className="aboutnphone__label">About and phone number</span>
                <p className="aboutnphone__about">Hello friends</p>
                <hr className="aboutnphone__line" />
                <h5 className="aboutnphone__number">+91 9997260969</h5>
            </div>
        )
    }
}