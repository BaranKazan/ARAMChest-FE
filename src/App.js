import './App.css';
import React, { Component } from 'react';
import ChampionCard from './components/ChampionCard';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      summonerName: "",
      region: "BRAZIL",
      champions: [],
      loading: false
    }
  }

  buttonClicked = (e) => {
    e.preventDefault();
    console.log("https://chest-api.azurewebsites.net/summonerName/" + this.state.summonerName + "/region/" + this.state.region);
    fetch("https://chest-api.azurewebsites.net/summonerName/" + this.state.summonerName + "/region/" + this.state.region)
      .then(response => {
        this.setState({ loading: true });
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        this.setState({ champions: data.champions.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)) })
      })
      .catch(error => console.log(error))
      .finally(() => this.setState({ loading: false }))
  }


  render() {
    const champions = this.state.champions.map((data) => <ChampionCard key={data.name} champion={data} />);
    let button;
    if (this.state.loading)
      button = <button onClick={this.buttonClicked} class="animate-bounce h-full shadow-lg py-2 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75" disabled>Searching...</button>;
    else
      button = <button onClick={this.buttonClicked} class="h-full shadow-lg py-2 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">Search</button>;

    return (
      <div class="flex flex-wrap flex-col justify-center items-center">
        <form className="flex items-stretch pt-8">
          <div className="flex flex-col flex-grow bg-white shadow-lg rounded-lg p-3 mx-2">
            <label className="mb-1">Summoner Name:</label>
            <input placeholder="Kinkymonkey" className="text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2" onChange={e => this.setState({ summonerName: e.target.value })}></input>
          </div>
          <div className="flex flex-col flex-none bg-white shadow-lg rounded-lg p-3 mx-2">
            <label className="mb-1">Region:</label>
            <select className="py-2 text-sm text-black border border-gray-200 rounded-md" onChange={e => this.setState({ region: e.target.value })}>
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
          <div className="flex-none mx-2">
            {button}
          </div>
        </form>
        {this.state.champions.length !== 0 &&
          <div className="mt-3 p-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl">
            <div className="grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 gap-4 p-3 bg-gray-200 rounded-3xl">
              {champions}
            </div>
          </div>
        }
      </div>
    );
  }
}

export default App;
