import React, { Component } from 'react';
import '../css/ErrorComponent.css'

export default class ErrorComponent extends Component {

    render(){
        return(
            <div className="error-message">No Sessions available for the given date</div>
        )
    }
}