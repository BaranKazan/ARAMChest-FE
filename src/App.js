import './App.css';
import React, { Component } from 'react';
import ChampionCard from './components/ChampionCard';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      summonerName: "",
      region: "BRAZIL",

      champions: []
    }
  }

  buttonClicked = (e) => {
    e.preventDefault();
    console.log("https://chest-api.azurewebsites.net/summonerName/" + this.state.summonerName + "/region/" + this.state.region);
    fetch("https://chest-api.azurewebsites.net/summonerName/" + this.state.summonerName + "/region/" + this.state.region)
      .then(response => response.json())
      .then(data => {
        this.setState({ champions: data.champions })
        console.log(this.state.champions)
      });
  }

  render() {

    const champions = this.state.champions.map((data) => <ChampionCard champion={data} />)

    return (
      <div className="container mt-96">
        <h1 class="font-extrabold text-transparent text-8xl bg-clip-text leading-normal bg-gradient-to-r from-green-400 to-blue-500">Hextech Discovery</h1>
        <form>
          <div className="flex flex-row">
            <div className="flex flex-col bg-white shadow-2xl rounded-md p-1 mr-3">
              <label>Summoner Name:</label>
              <input onChange={e => this.setState({ summonerName: e.target.value })}></input>
            </div>
            <div className="flex flex-col bg-white shadow-2xl rounded-md p-1 mr-3">
              <label>Region:</label>
              <select onChange={e => this.setState({ region: e.target.value })}>
                <option value="BRAZIL">BR</option>
                <option value="EUROPE_NORTH_EAST">EUNE</option>
                <option value="EUROPE_WEST">EUW</option>
                <option value="JAPAN">JP</option>
                <option value="KOREA">KR</option>
                <option value="LATIN_AMERICA_NORTH">LAN</option>
                <option value="LATIN_AMERICA_SOUTH">LAS</option>
                <option value="NORTH_AMERICA">NA</option>
                <option value="OCEANIA">OCE</option>
                <option value="RUSSIA">RU</option>
                <option value="TURKEY">TR</option>
              </select>
            </div>
            <button onClick={this.buttonClicked} class="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">Click me</button>
          </div>
        </form>
        <div className="mt-3 p-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl">
          <div className="grid grid-cols-6 gap-4 p-3 bg-gray-200 rounded-3xl">
            {champions}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
