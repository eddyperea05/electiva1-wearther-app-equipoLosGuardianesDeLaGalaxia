import { useState, useEffect } from "react";
import { getWeather } from "../helpers/getWeather";
import citiesJSON from "../../citiesJSON.json";

export const WeatherDates = () => {
  //Hooks useState
  const [city, setCity] = useState<string>("");
  const [temperature, setTemperature] = useState<number>(0);
  const [humidity, setHumidity] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  const getDate = async (city: string) => {
    const response = await fetch("../../citiesJSON.json");
    const obj = await response.json();

    const objetiveCity = obj.find((obj:any) => obj.city === city);
    console.log(objetiveCity);
    
    const lat = objetiveCity.lat;
    const lng = objetiveCity.lng;

    useEffect(() => {
      getWeather(lat, lng).then((weather) => {
        console.log(weather);
      }).catch((error) => {
        console.error(error);
      })
    }, []);
  };

  const onInputChange = (e: any) => {
    const value = e.target.value;
    setCity(value);
  };

  const onButtonCLick = (e: any) => {
    getDate(city);
  };

  return (
    <>
      <input type="text" name={city} onChange={onInputChange} />
      <button className="btn btn-primary" type="button" onClick={onButtonCLick}>
        Get image
      </button>
      <div>{city ? "none" : city}</div>
      <div>{temperature ? "none" : temperature}</div>
      <div>{humidity ? "none" : temperature}</div>
      <div>{description ? "none" : temperature}</div>
    </>
  );
};
