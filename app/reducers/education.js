const education = (state = [],action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return [...state];
        default:
            return state
    }
};

export default education;