import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import WeatherForm from "./Components/weatherForm";
import WeatherInfo from "./Components/weatherinfo";
import { API_KEY, API_KEY_DARKSKY } from "./Components/Keys";
class App extends Component {
  state = {
    error: null,
    lat: "",
    long: "",
    temperature: "",
    precipType: "",
    apparentTemperature: "",
    summary: "",
    wind: "",
    humidity: "",
    dewPoint: "",
    uvIndex: "",
    visibility: "",
    pressure: "",
    daily: "",
    hourly: "",
    today: "",
    todayHg: "",
    todayLow: "",
    dayO: "",
    dayOHg: "",
    dayOLow: "",
    dayT: "",
    dayTHg: "",
    dayTLow: "",
    dayTr: "",
    daytrHg: "",
    daytrLow: "",
    dayF: "",
    dayFHg: "",
    dayFLow: "",
    dayFi: "",
    dayFiHg: "",
    dayFiLow: "",
    dayS: "",
    daySHg: "",
    daySLow: "",
    daySe: "",
    daySeHg: "",
    daySeLow: "",
  };
  // getWeather = async e => {
  //   e.preventDefault()
  //   const {city} =e.target.elements;
  //   const cityValue = city.value;
  //   const API_URL= `https://api.mapbox.com/geocoding/v5/mapbox.places/${cityValue}.json?access_token=${API_KEY}&limit=1&autocompletetrue`;
  //  const res = await fetch(API_URL);
  //  const data = await res.json()
  //  console.log(data)
  //  this.setState({
  //    lat: data.features[0].geometry.coordinates[1],
  //    long: data.features[0].geometry.coordinates[0],
  //  }, () => console.log(this.state))

  // }
  getWeatherInfo = async (e) => {
    e.preventDefault();
    const { lat, long } = e.target.elements;
    const latitud = lat.value;
    const longitud = long.value;
    if (lat.value && long.value) {
      const API_URL_DARKSKY = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY_DARKSKY}/${latitud},${longitud}?lang=es`;
      const res = await fetch(API_URL_DARKSKY);
      const data = await res.json();
      this.setState({
        error: null,
        lat: latitud,
        long: longitud,
        temperature: data.currently.temperature,
        precipType: data.currently.summary,
        apparentTemperature: data.currently.apparentTemperature,
        summary: data.hourly.summary,
        wind: data.currently.windSpeed,
        humidity: data.currently.humidity,
        dewPoint: data.currently.dewPoint,
        uvIndex: data.currently.uvIndex,
        visibility: data.currently.visibility,
        pressure: data.currently.pressure,
        daily: data.daily.summary,
        today: data.daily.data[0].summary,
        todayHg: data.daily.data[0].apparentTemperatureHigh,
        todayLow: data.daily.data[0].apparentTemperatureLow,
        dayO: data.daily.data[1].summary,
        dayOHg: data.daily.data[1].apparentTemperatureHigh,
        dayOLow: data.daily.data[1].apparentTemperatureLow,
        dayT: data.daily.data[2].summary,
        dayTHg: data.daily.data[2].apparentTemperatureHigh,
        dayTLow: data.daily.data[2].apparentTemperatureLow,
        dayTr: data.daily.data[3].summary,
        dayTrHg: data.daily.data[3].apparentTemperatureHigh,
        dayTrLow: data.daily.data[3].apparentTemperatureLow,
        dayF: data.daily.data[4].summary,
        dayFHg: data.daily.data[4].apparentTemperatureHigh,
        dayFLow: data.daily.data[4].apparentTemperatureLow,
        dayFi: data.daily.data[5].summary,
        dayFiHg: data.daily.data[5].apparentTemperatureHigh,
        dayFiLow: data.daily.data[5].apparentTemperatureLow,
        dayS: data.daily.data[6].summary,
        daySHg: data.daily.data[6].apparentTemperatureHigh,
        daySLow: data.daily.data[6].apparentTemperatureLow,
        daySe: data.daily.data[7].summary,
        daySeHg: data.daily.data[7].apparentTemperatureHigh,
        daySeLow: data.daily.data[7].apparentTemperatureLow,
        hourly: data.daily.data[7].time,
      });
    } else {
      this.setState({ error: "Por favor ingrese latitud y longitud" });
    }
    localStorage.setItem("forecast", JSON.stringify(this.state));
    ob_ls();
    function ob_ls() {
      if (localStorage.getItem("forecast")) {
        let forecast = JSON.parse(localStorage.getItem("forecast"));
        console.log(forecast);
      } else {
        console.log("No hay entradas en el localStorage");
      }
    }
  };
  render() {
    return (
      <div className="">
        <Header {...this.state} />
        <WeatherForm getWeather={this.getWeatherInfo} />
        <WeatherInfo {...this.state} />
        <Footer />
      </div>
    );
  }
}
