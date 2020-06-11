const initialState = {
    favTeams: []
};

export default function favTeamReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_FAVTEAM':
            return { ...state, favTeams: state.favTeams.concat(action.payload) };
        default: return state;
    }
}