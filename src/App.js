import React, { useState } from "react";

import { fetchWeather } from "./api/fetchWeather";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default App;
