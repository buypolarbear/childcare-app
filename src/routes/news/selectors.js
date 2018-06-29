
export function selectNewsItems(state) {
    return state.news.items;
}

export function selectNewsItem(state, id) {
    const {news: { items }} = state;

    if (!items) {
        return undefined;
    }

    return items.find( (item) => id === item.id);
}