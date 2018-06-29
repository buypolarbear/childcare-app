import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
//import List from './NewsItemList';

class SessionsOverview extends Component {
    componentDidMount() {

        console.log("inside compodid mount")
        const {sessionsItems, getSessions} = this.props;

        if (!sessionsItems) {
            getSessions();
        }
    }



    render() {

        
        const {sessionItems} = this.props;
        console.log(sessionItems)
        return (
            <div>
                <h1>Sessions</h1>
                
                 
                {/*sessionItems ? <List items={sessionItems} /> : "Loading..."}*/}


            </div>
        )
    }
}

SessionsOverview.propTypes = {
    sessionsItems: PropTypes.array,
    getSessions: PropTypes.func.isRequired
};

export default SessionsOverview;