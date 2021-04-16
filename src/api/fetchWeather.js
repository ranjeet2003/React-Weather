import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "30a27fc813c42027c548f16b2d57f811";

const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });
  return data;
};
