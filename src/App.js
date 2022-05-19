import PokemonSearch from './PokemonSearch';
import YelpSearch from './YelpSearch';
import WeatherSearch from './WeatherSearch';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [yelpData, setYelpData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  const [yelpQuery, setYelpQuery] = useState('');
  const [weatherQuery, setWeatherQuery] = useState('');

  useEffect(() => {
    load();
  }, []);

  // async function handleYelpSearch(e) {
  //   e.preventDefault();
  //   const response = await getYelpData(yelpQuery);
  //   setYelpQuery(response);
  // }

  // async function handleWeatherSearch(e) {
  //   e.preventDefault();
  //   const response = await getWeatherData(weatherQuery);
  //   setWeatherQuery(response);
  // }

  return (
    <div className="App">
      <PokemonSearch />
      <YelpSearch />
      <WeatherSearch />
      {/* stretch goal: <WeatherSearch /> */}
    </div>
  );
}

export default App;
