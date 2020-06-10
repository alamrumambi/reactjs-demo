import React from 'react';
import { useHistory, useLocation } from 'react-router-dom'

export default (props) => {
    console.log(props);
    let history = useHistory();
    // let {team} = useLocation();

    return (
        <div className="Modal">
            <div className="infoBox">
                <button onClick={() => history.goBack()}>x</button>
                <img src={props.location.team.crestUrl} width="50%" />
                <h2>{props.location.team.name}</h2>
            </div>
        </div>
    )
}