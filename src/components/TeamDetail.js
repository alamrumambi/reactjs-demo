import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavTeam } from '../store/actions/favTeamActions';

export default (props) => {
    const dispatch = useDispatch();
    const teams = useSelector(state => state.favTeamReducer.favTeams);
    let history = useHistory();
    const [greenAlert, setGreenAlert] = useState(false);
    const [redAlert, setRedAlert] = useState(false);

    const addFav = () => {
        let find = false;
        for(let i in teams) {
            if(teams[i].id === props.location.team.id) {
                setRedAlert(true);
                find = true;
                setGreenAlert(false);
                break;
            }
        }
        if(!find) {
            dispatch(addFavTeam(props.location.team))
            setRedAlert(false);
            setGreenAlert(true);
        }
    }

    return (
        <div className="Modal">
            <div className="infoBox">
                <button className='modalButton' 
                onClick={() => { 
                    setGreenAlert(false);
                    setRedAlert(false);
                    history.goBack();
                }}
                >x</button>
                <img src={props.location.team.crestUrl} width="50%" />
                <h2>{props.location.team.name}</h2>
                {greenAlert && <h2 className="greenAlert">Success add to favourites!!</h2>}
                {redAlert && <h2 className="redAlert">This team already in Favourites</h2>}
                {props.location.favourite && <button onClick={addFav}>Add to Favourites</button>}
            </div>
        </div>
    )
}