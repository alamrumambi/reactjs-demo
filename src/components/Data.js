import React from 'react';
import Card from './Card';

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            inputNew: ''
        }
    }

    getText = (e) => {
        let text = e.target.value
        this.setState({
            inputNew: text
        })
    }

    addTeam = () => {
        console.log(this.state.inputNew);
        let input = this.state.teams;
        const id = input[input.length - 1].id + 1;
        // console.log(id);
        input.push({
            id,
            name: this.state.inputNew,
        })
        this.setState({
            teams: input
        })
    }

    componentDidMount() {
        fetch('https://api.football-data.org/v2/competitions/2014/teams', {
            method: 'GET',
            headers: {
                'X-Auth-Token': '3eb1a67de11247f9ab7b41c8b8415a63'
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    teams: data.teams
                })
            })
    }

    render() {
        return (
            <>
                <h1> Football Teams </h1>
                <input onChange={this.getText} type="text" />
                <button onClick={this.addTeam}>Add</button>
                <br></br>
                {this.props.text}
                <ul>
                    {this.state.teams.map((team) => {
                        return <Card team={team} key={team.id}></Card> 
                    })}
                </ul>
            </>
        )
    }
}

export default Data;