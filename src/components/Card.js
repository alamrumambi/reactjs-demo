import React from 'react';
// import { useRouteMatch, Switch, Route } from 'react-router-dom';
import TeamPhoto from './TeamPhoto';

export default (props) => {
    // const { url, path } = useRouteMatch();

    return (
        <div className="CardFrame">
            <div className="Card">
                <img src={props.team.crestUrl} width="50px" />
                <h5>{props.team.name}</h5>
            </div>
        </div>
    )
}