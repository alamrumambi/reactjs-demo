import { createStore } from 'redux';

const defaultState = {
    teams: [],
    favTeams: []
};

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'FETCH_TEAMS': 
            return {...state, teams: action.payload}
        case 'ADD_TEAM':
            return {...state, teams: state.teams.concat(action.payload)}
        case 'ADD_FAVTEAM':
            return {...state, favTeams: state.favTeams.concat(action.payload)}
        default: return state
    }
}

const store = createStore(reducer);

export default store;