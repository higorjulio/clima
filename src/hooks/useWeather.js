import { useState } from "react";

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      // Coordenadas da cidade
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=pt&format=json`
      );
      const geoData = await geoRes.json();
      if (!geoData.results?.length) throw new Error("Cidade não encontrada");

      const { latitude, longitude, name, country } = geoData.results[0];

      // Busca pela coordendas
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code,is_day,wind_direction_10m&timezone=America%2FSao_Paulo`
      );
      const weatherData = await weatherRes.json();

      setWeather({ ...weatherData.current, name, country });
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, error, fetchWeather };
}