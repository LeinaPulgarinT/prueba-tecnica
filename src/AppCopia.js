import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
// import Error from "./components/Error";
import Clima from "./components/Clima";

function App() {
  let latitudInicial = JSON.parse(localStorage.getItem("latitud"));
  if (!latitudInicial) {
    latitudInicial = [];
  }

  let longitudInicial = JSON.parse(localStorage.getItem("longitud"));
  if (!longitudInicial) {
    longitudInicial = [];
  }

  let temperatureInicial = JSON.parse(
    localStorage.getItem("temperatureInicial")
  );
  if (!temperatureInicial) {
    temperatureInicial = [];
  }

  let horaInicial = JSON.parse(localStorage.getItem("horas"));
  if (!horaInicial) {
    horaInicial = [];
  }

  const [ciudad, guardarCiudad] = useState("");
  const [latitud, guardarLatitud] = useState([latitudInicial]);
  const [longitud, guardarlongitud] = useState([longitudInicial]);
  const [temperature, guardartemperature] = useState([temperatureInicial]);
  const [horas, guardarHourly] = useState([horaInicial]);

  useEffect(() => {
    console.log("componente listo o algo cambio");
    //Prevenir ejecucion

    if (ciudad === "") return;

    const consultarMapbox = async () => {
      const token =
        "pk.eyJ1IjoibGVpbmEtcHVsZ2FyaW4iLCJhIjoiY2s5YnR0Y3JsMjV5NzNlbzVqMzRsNGxuZyJ9.otxxJ1VmAFAO7AezlOeb2Q";
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${ciudad}.json?access_token=${token}`;

      //consultar la URL
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      //   console.log(resultado);

      let latitud = resultado.features[0].geometry.coordinates[1];
      let longitud = resultado.features[0].geometry.coordinates[0];
      guardarLatitud(latitud);
      guardarlongitud(longitud);

      let latitudInicial = JSON.parse(localStorage.getItem("latitud"));
      if (latitudInicial) {
        localStorage.setItem("latitud", JSON.stringify(latitud));
      } else {
        localStorage.setItem("latitud", JSON.stringify([]));
      }

      let longitudInicial = JSON.parse(localStorage.getItem("longitud"));
      if (longitudInicial) {
        localStorage.setItem("longitud", JSON.stringify(longitud));
      } else {
        localStorage.setItem("longitud", JSON.stringify([]));
      }
    };
    consultarMapbox();

    const consultarDarkSky = async () => {
      const apiKey = "88030114c5e47763a011a75e7a10c633";
      const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey}/${latitud},${longitud} `;

      //Consultar la URL
      const res = await fetch(url);
      const result = await res.json();
      // console.log(result.currently.temperature);
      // console.log(result.hourly.data[0].temperature);
      console.log(result.daily);

      // let latitud = resultado.features[0].geometry.coordinates[1];
      let temperature = result.currently.temperature;
      guardartemperature(temperature);
      let horas = result.hourly.data[0].temperature;

      guardarHourly(horas);

      let horaInicial = JSON.parse(localStorage.getItem("horas"));
      if (horaInicial) {
        localStorage.setItem("horas", JSON.stringify(horas));
      } else {
        localStorage.setItem("horas", JSON.stringify([]));
      }

      let temperatureInicial = JSON.parse(localStorage.getItem("temperature"));
      if (temperatureInicial) {
        localStorage.setItem("temperature", JSON.stringify(temperature));
      } else {
        localStorage.setItem("temperature", JSON.stringify([]));
      }
    };

    consultarDarkSky();
  }, [ciudad, latitud, longitud, temperature]);

  const datosConsulta = (datos) => {
    // console.log(datos);

    //Validar que que ciudad este
    if (datos.ciudad === "") {
      //error
      return;
    }

    // si Ciudad s existen, agregalos al state
    guardarCiudad(datos.ciudad);
  };

  // const apiConsulta=(ubication)=>{
  //   if(ubication)
  // }
  return (
    <div className="App header">
      <Header titulo="Clima React App" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario datosConsultas={datosConsulta} />
            </div>
          </div>
          <div>
            <div className="col s12 m6">
              <Clima
                // longitudCiudad={longitud} latitudCiudad={latitud}
                temperatureCiudad={temperature}
                time={horas}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
