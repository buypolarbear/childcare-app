import { connect } from 'react-redux';

import SessionsOverview from '../components/SessionsOverview';
import {getSessions} from '../actions/GetSessions';
import {selectSessionsItems} from "../selectors";


const mapStateToProps = (state, ownProps) => ({
    sessionItems: selectSessionsItems(state)
});

const mapDispatchToProps = {
    getSessions
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionsOverview);