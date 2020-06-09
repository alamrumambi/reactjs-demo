import React, { useState, useEffect } from 'react';
import Card from './Card';
import TeamPhoto from './TeamPhoto';

const Data = (props) => {

    const [teams, setTeams] = useState([]);
    const [input, setInput] = useState('');
    const [info, setInfo] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState({});

    useEffect(() => {
        fetch('https://api.football-data.org/v2/competitions/2014/teams', {
            method: 'GET',
            headers: {
                'X-Auth-Token': '3eb1a67de11247f9ab7b41c8b8415a63'
            }
        })
            .then(response => response.json())
            .then(data => {
                setTeams(data.teams);
            })
    }, [])

    const addTeam = () => {
        const id = teams[teams.length - 1].id + 1;
        setTeams(teams.concat({
            id,
            name: input,
            crestUrl: 'https://i.imgur.com/IZpOVdE.jpg',
        }))
        setInput('');
    }

    const showInfo = (value, team) => {
        setSelectedTeam(team);
        setInfo(value);
    }

    return (
        <>
            { info && <TeamPhoto team={ selectedTeam } showInfo={ showInfo } /> }
            
            <h1> Spain League Football Teams </h1>
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
            <button onClick={ addTeam }>Add</button>
            <br></br>
            <ul>
                {teams.map((team) => {
                    return <Card showInfo={ showInfo } team={ team } key={ team.id }></Card>
                })}
            </ul>
        </>
    )
    // }
}

export default Data;