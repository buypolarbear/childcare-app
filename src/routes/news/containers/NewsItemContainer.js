// @see https://redux.js.org/basics/usage-with-react#implementing-container-components

import { connect } from 'react-redux';

import {selectNewsItem} from "../selectors";
import NewsItem from "../components/NewsItem";
import {getNews} from "../actions";

// Provide a prop 'item' to NewsItem (this.props.item)
//
// @see https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options

const mapStateToProps = (state, ownProps) => {
    const newsItem = selectNewsItem(state, parseInt(ownProps.match.params.id, 10));

    return {
        item: newsItem
    }
};

// Provide a prop 'getNews' to NewsItem. It can call this function when it thinks it doesn't have any
// newsItems yet: `this.props.getNews()`. This may seem a bit confusing and getNews() only returns an object. But
// redux actually wraps this function in such a way that it calls dispatch() with that object.
//
// @see https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options

const mapDispatchToProps = {
    getNews
};


export default connect(mapStateToProps, mapDispatchToProps)(NewsItem);