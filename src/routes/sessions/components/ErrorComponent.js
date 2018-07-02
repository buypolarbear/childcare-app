import React, { Component } from 'react';
/*Styling*/
import '../css/ErrorComponent.css'

//component that gets called in case of error in returning data from server
export default class ErrorComponent extends Component {

    render(){
        return(
            <div className="error-message">Oops !!! something went wrong....Please try again :(</div>
        )
    }
}