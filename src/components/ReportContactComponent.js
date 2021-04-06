import React, {Component} from 'react';
import './reportcontact.scss';

import {AiTwotoneDislike} from 'react-icons/ai';

export default class ReportContactComponent extends Component{
    render(){
        return (
            <div className="reportcontact reportcontact--size reportcontact--theme">
                <AiTwotoneDislike className="reportcontact__icon"/>
                <h3 className="reportcontact__label">Report contact</h3>
            </div>
        )
    }
}