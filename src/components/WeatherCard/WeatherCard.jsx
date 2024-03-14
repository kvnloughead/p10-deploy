import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  // console.log(weatherData); Keeping here to check condition
  const temperature = Math.round(weatherData.temp.F);
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp"> {temperature}&deg;F</p>
      <img
        src={weatherOption?.url}
        alt={`Image showing ${weatherData.isDay ? "day" : "night"}time with ${
          weatherData.condition
        }`}
        className="weather-card__img"
      />
    </section>
  );
}

export default WeatherCard;
