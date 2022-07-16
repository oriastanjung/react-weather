import { useState, useEffect } from "react";
import './App.css';

import axios from "axios";
import Input from "./components/Input";
import Result from "./components/Result";
const baseUrl = "https://api.openweathermap.org/data/2.5/";
const apiKey = "8bd4ffda3200e231cdc0b6a094119c23";
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
function App() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");

  const onChangeHandler = (e) => {
    setCity(e.target.value);
  };
  useEffect(() => {
    const getWeatherFromCity = async () => {
      try {
        const resp = await axios.get(
          `${baseUrl}weather?q=${city}&appid=${apiKey}`
        );
        const tempCelcius = Math.round(resp.data.main.temp - 273.15);
        setTemperature(tempCelcius);
        // console.log(tempCelcius);
      } catch (error) {
        console.log(error);
      }
    };

    getWeatherFromCity();
  }, [city]);

  // useEffect(() => {
  //   console.log(city);
  // }, [city])
  return (
    <div className={`App ${temperature > 0 && temperature < 35 ? "" : "warm"}`}>
      <Input
        name="city"
        value={city}
        type="text"
        placeholder="Search City"
        onChange={onChangeHandler}
      />
      {(city === "") ? "": <Result data={{ city: city, temperature: temperature }} />}
      
    </div>
  );
}

export default App;
