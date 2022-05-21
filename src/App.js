import PokemonSearch from './PokemonSearch';
import YelpSearch from './YelpSearch';
import './App.css';

function App() {
  // const [yelpData, setYelpData] = useState([]);
  // const [pokemonData, setPokemonData] = useState([]);

  // const [pokemonQuery, setPokemonQuery] = useState('pokemon');
  // const [yelpQuery, setYelpQuery] = useState('');

  // //WEATHER
  // // const [weatherData, setWeatherData] = useState([]);

  // useEffect(() => {}, []); //what does [] do?

  // async function handleYelpSearch(e) {
  //   e.preventDefault();

  //   const response = await getYelpData(yelpQuery);

  //   console.log('yelp search', response.data.businesses);

  //   setYelpQuery(response.data.businesses);
  // }

  // async function handlePokemonSearch(e) {
  //   e.preventDefault();

  //   const response = await getPokemonData(pokemonQuery);

  //   setPokemonQuery(response);
  // }
  // //how come there are no return in the functions above?

  // //WEATHER
  // // async function handleWeatherSearch(e) {
  // //   e.preventDefault();
  // //   const response = await getWeatherData(weatherQuery);
  // //   setWeatherQuery(response);
  // // }

  return (
    <div className="App">
      <PokemonSearch />

      {/* <YelpSearch /> */}

      {/* <WeatherSearch /> */}
      {/* stretch goal: <WeatherSearch /> */}
    </div>
  );
}

export default App;
