import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link, Route, Switch } from 'react-router-dom';
import TeamCard from './TeamCard';
import TeamDetail from './TeamDetail';
// import useFetch from '../hooks/useFetch';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTeams, addTeam } from '../store/actions/teamActions';

export default () => {

    const dispatch = useDispatch();
    const { url, path } = useRouteMatch();
    // const fetchUrl = 'https://api.football-data.org/v2/competitions/2014/teams';
    // const method = 'GET';
    // const headers = {
    //     'X-Auth-Token': '3eb1a67de11247f9ab7b41c8b8415a63',
    // };
    // const [data] = useFetch(fetchUrl, method, headers);
    const teams = useSelector(state => state.teamReducer.teams)
    const [input, setInput] = useState('');

    useEffect(() => {
        dispatch(fetchTeams());
    }, [])

    const addNewTeam = () => {
        const id = teams[teams.length - 1].id + 1;
        const payload = {
            id,
            name: input,
            crestUrl: 'https://i.imgur.com/IZpOVdE.jpg',
        }
        dispatch(addTeam(payload));
        setInput('');
    }

    return (
        <>
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
            <button onClick={addNewTeam}>Add</button>
            <br></br>
            {teams.length === 0 && <p>Loading..</p>}
            <ul>
                {teams.map((team) => {
                    return <Link key={team.id} to={{
                        pathname: `/team/${team.id}`,
                        favourite: true,
                        team
                    }}>
                        <TeamCard team={team}></TeamCard>
                    </Link>
                })}
            </ul>
        </>
    )
}