import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
// import Error from "./components/Error";
import Clima from "./components/Clima";

function App() {
  let mensajeInicial = JSON.parse(localStorage.getItem("summary"));
  if (!mensajeInicial) {
    mensajeInicial = [];
  }
  let diasIniciales = JSON.parse(localStorage.getItem("dias"));
  if (!diasIniciales) {
    diasIniciales = [];
  }
  let coordenadasIniciales = JSON.parse(localStorage.getItem("coordenadas"));
  if (!coordenadasIniciales) {
    coordenadasIniciales = [];
  }
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
  const [coordenadas, guardarCoordenadas] = useState({ coordenadasIniciales });
  const [dias, guardarDias] = useState({ diasIniciales });
  const [summary, guardarMensaje] = useState({ mensajeInicial });

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

    let coordenadas = { latitud, longitud };
    guardarLatitud(latitud);
    guardarlongitud(longitud);
    guardarCoordenadas(coordenadas);
    let coordenadasIniciales = JSON.parse(localStorage.getItem("coordenadas"));
    if (coordenadasIniciales) {
      localStorage.setItem("coordenadas", JSON.stringify(coordenadas));
    } else {
      localStorage.setItem("coordenadas", JSON.stringify([]));
    }

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

  const consultarDarkSky = async () => {
    const apiKey = "88030114c5e47763a011a75e7a10c633";
    const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey}/${latitud},${longitud}?lang=es `;

    //Consultar la URL
    const res = await fetch(url);
    const result = await res.json();
    console.log(result);
    // console.log(result.currently.temperature);
    // console.log(result.hourly.data[0].temperature);
    // console.log(result.daily);

    let mensaje = result.daily.data[0].summary;
    let high = result.daily.data[0].temperatureMax;
    let low = result.daily.data[0].temperatureMin;

    let summary = { mensaje, high, low };
    guardarMensaje(summary);

    // let latitud = resultado.features[0].geometry.coordinates[1];
    let temperature = result.currently.temperature;
    guardartemperature(temperature);
    // console.log(result.currently);
    let horas = result.hourly.data[0].temperature;
    guardarHourly(horas);

    let hoy = result.daily.data[0].temperatureLow;
    let diaUno = result.daily.data[1].temperature;
    let diaDos = result.daily.data[2].temperature;
    let diaTres = result.daily.data[3].temperature;
    let diaCuatro = result.daily.data[4].temperature;
    let diaCinco = result.daily.data[5].temperature;
    let diaSeis = result.daily.data[6].temperature;
    let diaSiete = result.daily.data[7].temperature;

    let dias = {
      hoy,
      diaUno,
      diaDos,
      diaTres,
      diaCuatro,
      diaCinco,
      diaSeis,
      diaSiete,
    };
    guardarDias(dias);

    let mensajeInicial = JSON.parse(localStorage.getItem("summary"));
    if (mensajeInicial) {
      localStorage.setItem("summary", JSON.stringify(summary));
    } else {
      localStorage.setItem("summary", JSON.stringify([]));
    }

    let diasIniciales = JSON.parse(localStorage.getItem("dias"));
    if (diasIniciales) {
      localStorage.setItem("dias", JSON.stringify(dias));
    } else {
      localStorage.setItem("dias", JSON.stringify([]));
    }

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

  // consultarMapbox();

  // consultarDarkSky();

  useEffect(() => {
    console.log("componente listo o algo cambio");
    //Prevenir ejecucion

    if (ciudad === "") return;

    consultarMapbox();

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
      <Header titulo="DARK SKY" />

      <div className="">
        <div className="container">
          <div className="row">
            <div className="col sm-12">
              <Formulario datosConsultas={datosConsulta} />
            </div>
          </div>
          <div>
            <div className="">
              <Clima
                // longitudCiudad={longitud} latitudCiudad={latitud}
                temperatureCiudad={temperature}
                time={horas}
                location={coordenadas.latitud}
                today={dias.hoy}
                description={summary.mensaje}
                temperatureMax={summary.high}
                temperatureMin={summary.low}
              />
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
