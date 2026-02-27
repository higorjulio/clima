export function WeatherDetails({ data }) {
  return (
    <div className="details">
      <div>
        <span>Sensação</span>
        <span>{Math.round(data.apparent_temperature)}°C</span>
      </div>
      <div>
        <span>Umidade</span>
        <span>{data.relative_humidity_2m}%</span>
      </div>
      <div>
        <span>Vento</span>
        <span>{data.wind_speed_10m} km/h</span>
      </div>
    </div>
  );
}