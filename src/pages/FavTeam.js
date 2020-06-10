import React, {useState} from 'react';
import {useRouteMatch ,Link, Route, Switch} from 'react-router-dom';
import Card from '../components/Card';
import TeamPhoto from '../components/TeamPhoto';
import { useSelector, useDispatch } from 'react-redux';

export default () => {
    
    const {url, path} = useRouteMatch();
    const teams = useSelector(state => state.favTeams)
    const [selectedTeam, setSelectedTeam] = useState({});
    
    return(
        <>
            {teams.length === 0 && <p>Empty Favourite Teams</p>}
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