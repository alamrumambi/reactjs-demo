import React from 'react';

export default (props) => {
    return(
        <div className="Modal">
            <div className="infoBox">
                <button onClick={ () => props.showInfo(false, {}) }>x</button>
                <img src={ props.team.crestUrl } width="50%"/>
    <           h2>{ props.team.name }</h2>
            </div>
        </div>
    )
}