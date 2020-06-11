export const fetchTeams = () => {
    return (dispatch) => {

        const fetchUrl = 'https://api.football-data.org/v2/competitions/2014/teams';
        const method = 'GET';
        const headers = {
            'X-Auth-Token': '3eb1a67de11247f9ab7b41c8b8415a63',
        };
        //redux-loger

        fetch(fetchUrl, { method, headers })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: 'FETCH_TEAMS',
                    payload: data.teams
                })
            })
            .catch(console.log);
    }
}

export const addTeam = (payload) => {
    return {
        type: 'ADD_TEAM',
        payload
    }
}