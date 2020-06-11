import React, {useState} from 'react';
import {useRouteMatch ,Link, Route, Switch} from 'react-router-dom';
import TeamCard from '../components/TeamCard';
import TeamDetail from '../components/TeamDetail';
import { useSelector } from 'react-redux';

export default () => {
    
    const {url, path} = useRouteMatch();
    const teams = useSelector(state => state.favTeamReducer.favTeams);
    
    return(
        <>
            {teams.length === 0 && <p>Empty Favourite Teams</p>}
            <ul>
                {teams.map((team) => {
                    return <Link key={team.id} to={{
                        pathname:`/team/${team.id}`,
                        team }}>
                        <TeamCard team={team}></TeamCard>
                            </Link>
                })}
            </ul>
        </>
    )
}