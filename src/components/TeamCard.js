import React from 'react';

export default (props) => {

    return (
        <div className="CardFrame">
            <div className="Card">
                <img src={props.team.crestUrl} width="50px" />
                <h5>{props.team.name}</h5>
            </div>
        </div>
    )
}