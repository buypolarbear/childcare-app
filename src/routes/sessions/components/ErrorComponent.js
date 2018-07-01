import React, { Component } from 'react';
import '../css/ErrorComponent.css'

export default class ErrorComponent extends Component {

    render(){
        return(
            <div className="error-message">Oops !!! something went wrong....Please try again :(</div>
        )
    }
}