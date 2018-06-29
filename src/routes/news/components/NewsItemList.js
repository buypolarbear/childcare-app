import React from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';

function NewsItemList(props) {
    return (
        <div>
            {Object.values(props.items).map(
                    (item,id) => <NewsItem key={id} item={item} hideContent={true}/>)
            }
        </div>
    );
}

NewsItemList.propTypes = {
    items: PropTypes.array.isRequired
};

export default NewsItemList;