import React,{Component} from 'react';
import './landing.scss';
import image from './../assets/images/landingimg.jpg';

export default class LandingPage extends Component{
    render(){
        return (
            <section className="landingsection landingsection--size landingsection--theme">
                <div className="landingsection__container">
                    <img src={image} alt="imag" className="landingsection__image" />
                    <div className="landingsection__data">
                        <h1 className="landingsection__title">Keep your phone connected</h1>
                        <p className="landingsection__description">
                            WhatsApp conntects to your phone to sync messages.To reduce data usage, 
                            connect your phone to WI-Fi.</p>
                    </div>
                </div>
                <hr className="landingsection__bottomline" />
            </section>
        )
    }
}