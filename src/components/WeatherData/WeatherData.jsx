const WeatherData = (props) => {
  const { weatherData } = props;
  console.log(weatherData)
  
  return (
    <>
      <p>
        <span>conditions: </span>
        {props.conditions}
      </p>
      <p>
        <span>time: </span>
        {props.time}
      </p>
    </>
  );
};

export default WeatherData;
