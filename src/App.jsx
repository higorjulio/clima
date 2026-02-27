import { SearchBar } from "./components/SearchBar";
import { WeatherCard } from "./components/WeatherCard";
import { useWeather } from "./hooks/useWeather";
import "./style.css"

function App() {
  const { weather, loading, error, fetchWeather } = useWeather();

  return (
    <div>
      <header>
      <div className="header-logo" onClick={() => {window.location.href = "/"}}>Clima</div>
      <SearchBar onSearch={fetchWeather} />
      </header>
      {!loading && !weather && <h1>As informações sobre a cidade aparecerão aqui</h1>}
      {loading && <p>Carregando...</p>}
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;