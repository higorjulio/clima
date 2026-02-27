import { WeatherDetails } from "./WeatherDetails";

// Mapa simples de código de clima para descrição
const weatherDescriptions = {
  0: "Céu limpo", 1: "Majoritariamente limpo", 2: "Parcialmente nublado",
  3: "Nublado", 45: "Névoa", 61: "Chuva leve", 63: "Chuva moderada",
  65: "Chuva forte", 80: "Pancadas de chuva", 95: "Tempestade",
};

export function WeatherCard({ data }) {
  const description = weatherDescriptions[data.weather_code] || "Desconhecido";

  return (
    <div className="card">
      <h2>{data.name}, {data.country}</h2>
      <p className="temp">{Math.round(data.temperature_2m)}°C</p>
      <p className="description">{description}</p>
      <WeatherDetails data={data} />
    </div>
  );
}