import WeatherData from "../WeatherData/WeatherData.jsx";
import WeatherIcon from "../WeatherIcon/WeatherIcon.jsx";
import "./WeatherForecast.css";

const WeatherForecast = (props) => {
  const { weatherForecast } = props;
  console.log(weatherForecast)
  return (
    <section>
      <div className="weather">
        <h2>{weatherForecast.day}</h2>
        <WeatherIcon
          img= {weatherForecast.img}
          imgAlt= {weatherForecast.imgAlt}
        />

        <WeatherData
          conditions={weatherForecast.conditions}
          time={weatherForecast.time}
        />
      </div>
    </section>
  );
};

export default WeatherForecast;
