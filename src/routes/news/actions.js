// @see https://redux.js.org/basics/reducers

export const GET_NEWS     = 'news/GET_NEWS';
export const NEWS_LOADED  = 'news/NEWS_LOADED';

export function getNews() {
    return {
        type: GET_NEWS
    }
}

export function newsLoaded(items) {
    return {
        type: NEWS_LOADED,
        payload: items
    }
}
