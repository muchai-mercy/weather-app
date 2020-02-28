import axios from 'axios';

const APIURL = "http://api.openweathermap.org";

export const searchWeather = loc =>
  axios.get(
    `${APIURL}/data/2.5/weather?q=${loc}&appid=${process.env.REACT_APP_APIKEY}`
  );
export const searchForecast = loc =>
  axios.get(
    `${APIURL}/data/2.5/forecast?q=${loc}&appid=${process.env.REACT_APP_APIKEY}`
  );
