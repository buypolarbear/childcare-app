import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './NewsItemList';

class NewsOverview extends Component {
    componentDidMount() {
        const {newsItems, getNews} = this.props;

        if (!newsItems) {
            getNews();
        }
    }

    render() {
        const {newsItems} = this.props;

        return (
            <div>
                <h1>News</h1>

                {newsItems ? <List items={newsItems} /> : "Loading..."}
            </div>
        )
    }
}

NewsOverview.propTypes = {
    newsItems: PropTypes.array,
    getNews: PropTypes.func.isRequired
};

export default NewsOverview;