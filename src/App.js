import './App.css';
import ChampionCard from './components/ChampionCard';

function App() {
  return (
    <div className="container mt-96">
      <h1 class="font-extrabold text-transparent text-8xl bg-clip-text leading-normal bg-gradient-to-r from-green-400 to-blue-500">Hextech Discovery</h1>
      <form>
        <div className="flex flex-row">
          <div className="flex flex-col bg-white shadow-2xl rounded-md p-1 mr-3">
            <label>Summoner Name:</label>
            <input></input>
          </div>
          <div className="flex flex-col bg-white shadow-2xl rounded-md p-1 mr-3">
            <label>Region:</label>
            <select>
              <option>BR</option>
              <option>EUNE</option>
              <option>EUW</option>
              <option>JP</option>
              <option>KR</option>
              <option>LAN</option>
              <option>LAS</option>
              <option>NA</option>
              <option>OCE</option>
              <option>RU</option>
              <option>TR</option>
            </select>
          </div>
          <button class="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">Click me</button>
        </div>
      </form>
      <div className="mt-3 p-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl">
        <div className="grid grid-cols-6 gap-4 p-3 bg-gray-200 rounded-3xl">
          <ChampionCard />
          <ChampionCard />
          <ChampionCard />
          <ChampionCard />
          <ChampionCard />
          <ChampionCard />
          <ChampionCard />
          <ChampionCard />
          <ChampionCard />
        </div>
      </div>
    </div>
  );
}

export default App;
