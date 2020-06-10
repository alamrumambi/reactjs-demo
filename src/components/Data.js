import React, {useState, useEffect} from 'react';
import {useRouteMatch, Link, Route, Switch} from 'react-router-dom';
import Card from './Card';
import TeamPhoto from './TeamPhoto';
import useFetch from '../hooks/useFetch';

export default () => {
    
    const {url, path} = useRouteMatch();
    const fetchUrl = 'https://api.football-data.org/v2/competitions/2014/teams';
    const method = 'GET';
    const headers = {
        'X-Auth-Token': '3eb1a67de11247f9ab7b41c8b8415a63',
    };
    const [data] = useFetch(fetchUrl, method, headers);
    // console.log('data di comp data >>', data);
    const [teams, setTeams] = useState([]);
    const [input, setInput] = useState('');
    const [info, setInfo] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState({});

    useEffect(() => {
        setTeams(data);
    }, [data])

    // const showInfo = (value, team) => {
    //     setSelectedTeam(team);
    //     setInfo(value);
    // }

    const addTeam = () => {
        const id = teams[teams.length - 1].id + 1;
        setTeams(teams.concat({
            id,
            name: input,
            crestUrl: 'https://i.imgur.com/IZpOVdE.jpg',
        }))
        setInput('');
    }
    
    return(
        <>
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
            <button onClick={addTeam}>Add</button>
            <br></br>
            {data.length === 0 && <p>Loading..</p>}
            <ul>
                {teams.map((team) => {
                    return <Link key={team.id} to={{
                        pathname:`${url}/team/${team.id}`,
                        team }}>
                        <Card team={team}></Card>
                            </Link>
                })}
            </ul>
            <Switch>
                <Route path={`${path}/team/:id`} component={TeamPhoto}>
                </Route>
            </Switch>
        </>
    )
}