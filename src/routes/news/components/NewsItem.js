import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NewsItem extends Component {

    componentDidMount() {
        const {item, getNews} = this.props;

        // We probably reloaded the page on a specific ID
        if (!item) {
            return getNews();
        }
    }

    render() {
        const {item, hideContent} = this.props;

        if (!item) {
            return <div>Loading?</div>
        }

        const {id, title, author, content} = item;

        return <div>
            <Link to={"/news/" + id}>{title}</Link> by <strong>{author}</strong>
            {!hideContent && <p>{content}</p>}
        </div>
    }
}

NewsItem.propTypes = {
    item: PropTypes.object,
    hideContent: PropTypes.bool
};

export default NewsItem;
