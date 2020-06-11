const initialState = {
    teams: []
};

export default function teamReducer(state = initialState, action) {
    switch(action.type) {
        case 'FETCH_TEAMS':
            return { ...state, teams: action.payload };
        case 'ADD_TEAM':
            return { ...state, teams: state.teams.concat(action.payload) };
        default: return state;
    }
}