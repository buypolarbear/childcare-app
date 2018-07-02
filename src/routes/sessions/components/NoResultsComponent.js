import React, { Component } from 'react';
//Styling
import '../css/ErrorComponent.css'

//component that gets called when no results are available for a particular day
export default class NoResultsComponent extends Component {

    render(){
        return(
            <div className="error-message">No Sessions available</div>
        )
    }
}