import React, {Component} from 'react';
import './container.scss';

export default class ContainerLayout extends Component {
    render(){
        return (
            <div className="
                container 
                container--size 
                container--theme">
                <div className="
                    container__left 
                    container__left--theme 
                    container__left--size">

                </div>
                <div className="
                    container__middle 
                    container__middle--theme 
                    container__middle--size">

                </div>
                <div className="
                    container__right 
                    container__right--theme 
                    container__right--size">
                    
                </div>
            </div>
        )
    }
}