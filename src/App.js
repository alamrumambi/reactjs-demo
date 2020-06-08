import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

class Card extends React.Component {
  constructor() {
    super();
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
    // this.inputNew = text;
    // console.log('text >> ', text);
    // console.log('newText >> ', this.state.inputNew);
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
    Axios({
      method: 'GET',
      url: 'https://api.football-data.org/v2/competitions/2014/teams',
      headers: {
        "X-Auth-Token": '3eb1a67de11247f9ab7b41c8b8415a63'
      }
    })
      .then((res => {
        // console.log(res.data.teams);
        this.setState({
          teams: res.data.teams
        })
      }))
      .catch(err => {
        console.log(err.response.data);
      })
    // console.log('didMount');
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
            return <li key={team.id}>{team.id}. {team.name}</li>
          })}
        </ul>
      </>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Card text="List of Teams">
      </Card>
    </div>
  );
}

export default App;
