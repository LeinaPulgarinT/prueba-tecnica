import React from "react";

const Clima = (props) => {
  const {
    //   longitudCiudad, latitudCiudad
    temperatureCiudad,
    time,
    location,
    today,
  } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="container justify-content-center col-sm-8 col-md-6 col-lg-4 col-xl-4 temperatura">
          <i class="fas fa-cloud-sun"></i>
          <h1 className="text-center"> {temperatureCiudad} &#x2103;</h1>
          <div className="">
            <p className="text-center">Temperatura Máxima: </p>
            <p className="text-center">Temperatura Mínima: </p>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col justify-content-center">
          <h2 className="text-center">Clima por dias</h2>
          <h2>la hora es: {time}</h2>
          {/* <p>Hoy{location}</p> */}
          <p>Hoy {today}</p>
          <p>Dia 1</p>
          <p>Dia 2</p>
          <p>Dia 3</p>
          <p>Dia 4</p>
          <p>Dia 5</p>
          <p>Dia 6</p>
        </div>
      </div>
      <div className="row my-5">
        <div className="col justify-content-center">
          <h2 className="text-center">Clima por horas</h2>
          <h2>la hora es: {time}</h2>
          <p>Hoy</p>
          <p>Dia 1</p>
          <p>Dia 2</p>
          <p>Dia 3</p>
          <p>Dia 2</p>
          <p>Dia 2</p>
          <p>Dia 2</p>
        </div>
      </div>

      <div className="row my-5">
        <div className="col justify-content-center">
          <h2 className="text-center">Clima por minutos</h2>
          <h2>la hora es: {time}</h2>
          <p>Hoy</p>
          <p>Dia 1</p>
          <p>Dia 2</p>
          <p>Dia 2</p>
          <p>Dia 2</p>
          <p>Dia 2</p>
          <p>Dia 2</p>
        </div>
      </div>
    </div>
  );
};

export default Clima;
