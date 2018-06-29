// @see https://redux.js.org/basics/usage-with-react#implementing-container-components

import { connect } from 'react-redux';

import NewsOverview from '../components/NewsOverview';
import {getNews} from '../actions';
import {selectNewsItems} from "../selectors";

// Provide a prop 'newsItems' to NewsOverview (it can find them under `this.props.newsItems)
// Whenever the state changes, this container is rerendered and it provides the new state to the NewsOverview
// component it wraps.
//
// @see https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options

const mapStateToProps = (state, ownProps) => ({
    newsItems: selectNewsItems(state)
});

// Provide a prop 'getNews' to NewsOverview. It can call this function when it thinks it doesn't have any
// newsItems yet: `this.props.getNews()`. This may seem a bit confusing and getNews() only returns an object. But
// redux actually wraps this function in such a way that it calls dispatch() with that object.
//
// @see https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options

const mapDispatchToProps = {
    getNews
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsOverview);