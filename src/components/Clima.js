import React from "react";

const Clima = (props) => {
  const {
    //   longitudCiudad, latitudCiudad
    temperatureCiudad,
    time,
    location,
    today,
    description,
    temperatureMax,
    temperatureMin,
  } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="container justify-content-center col-sm-8 col-md-6 col-lg-4 col-xl-4 temperatura">
          <i className="fas fa-cloud-sun"></i>
          <div>
            <p className="text-center text-info">
              <strong>{description}</strong>
            </p>
            <h1 className="text-center">
              {" "}
              <span className="text-info">
                {parseInt(temperatureCiudad)}
              </span>{" "}
              &#8457;
            </h1>
          </div>
          <div className="">
            <p className="text-center">
              Temperatura Máxima:
              <span className="text-info">
                {" "}
                {parseInt(temperatureMax)}
              </span>{" "}
              &#8457;
            </p>
            <p className="text-center">
              Temperatura Mínima:
              <span className="text-info">
                {" "}
                {parseInt(temperatureMin)}
              </span>{" "}
              &#8457;
            </p>
          </div>
        </div>
      </div>
      {/* <div className="row my-5 container-fluid">
        <div className="col justify-content-center borde container-fluid">
          <h2 className="text-center my-3">
            {" "}
            <span className="text-info"> CLIMA DE LOS PROXIMOS SIETE DIAS</span>
          </h2>

          <div className="d-flex container-fluid row my-5">
            <div className="container col-sm-6 col-md-6 col-lg-3 col-xl-3 borde m-2 ">
              <p>Hoy {today}</p>
            </div>
            <div className="container col-sm-6 col-md-6 col-lg-3 col-xl-3 borde m-2">
              {" "}
              <p>Dia 1</p>
            </div>
            <div className="container col-sm-6 col-md-6 col-lg-3 col-xl-3 borde m-2">
              <p>Dia 2</p>
            </div>
            <div className="container col-sm-6 col-md-6 col-lg-3 col-xl-3 borde m-2">
              <p>Dia 3</p>
            </div>
            <div className="container col-sm-6 col-md-6 col-lg-3 col-xl-3 borde m-2">
              {" "}
              <p>Dia 4</p>
            </div>
            <div className="container col-sm-6 col-md-6 col-lg-3 col-xl-3 borde m-2">
              <p>Dia 5</p>
            </div>
            <div className="container col-sm-6 col-md-6 col-lg-3 col-xl-3 borde m-2">
              <p>Dia 6</p>
            </div>
            <div className="container col-sm-6 col-md-6 col-lg-3 col-xl-3 borde m-2">
              <p>Dia 7</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Clima;
