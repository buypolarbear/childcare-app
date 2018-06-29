
export function selectSessionsItems(state) {
    return state.sessions.items;
}

export function selectSessionsItem(state, id) {
    const {sessions: { items }} = state;

    if (!items) {
        return undefined;
    }

    return items.find( (item) => id === item.id);
}