import { useState } from "react";

export function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) onSearch(city.trim());
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma cidade..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}