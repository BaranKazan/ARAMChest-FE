
import './App.css';

function App() {
  return (
    <div className="container mt-96">
      <h1 class="font-extrabold text-transparent text-8xl bg-clip-text leading-normal bg-gradient-to-r from-green-400 to-blue-500">Hextech Discovery</h1>
      <form>
        <div className="flex flex-row">
          <div className="flex flex-col bg-white shadow-2xl rounded-md p-1 mr-1">
          <label>Summoner Name:</label>
          <input></input>
          </div>
          <div className="flex flex-col bg-white shadow-2xl rounded-md p-1">
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
        </div>
      </form>
    </div>
  );
}

export default App;
