import { connect } from 'react-redux';
import SessionsOverview from '../components/SessionsOverview';

//actions
import {getSessions} from '../actions/GetSessions';
import {updatePresence} from '../actions/UpdatePresence'

import {selectSessionsItems} from "../selectors";


const mapStateToProps = (state) => ({
    sessionItems: selectSessionsItems(state)
});

const mapDispatchToProps = {
    getSessions,
    updatePresence
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionsOverview);