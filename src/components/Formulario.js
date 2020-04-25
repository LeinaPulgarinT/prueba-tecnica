import React, { useState } from "react";

const Formulario = ({ datosConsultas }) => {
  //state del componente
  //busqueda= state, guardarBusqueda= this.setState({})
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
  });
  const handleChange = (e) => {
    //Cambiar el state
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });

    // console.log(busqueda);
  };

  const consultarLocation = (e) => {
    e.preventDefault();

    //pasar hacia el componente principla la busqueda del usuario

    datosConsultas(busqueda);
  };
  return (
    <form onSubmit={consultarLocation} className="my-3 row">
      <label htmlFor="ciudad" className="my-3 m-auto d-block"></label>

      <div className="d-flex container justify-content-center">
        {/* <input
          type="text"
          name="ciudad"
          id="ciudad"
          onChange={handleChange}
          className="text-dark my-3 input"
        /> */}

        <input
          className="form-control text-dark text-dark my-3 col-sm-4 col-md-6 col-lg-6 col lx-6"
          placeholder="Ingresa una Ciudad"
          type="text"
          name="ciudad"
          id="ciudad"
          onChange={handleChange}
        />
        <div className="my-3 mx-1">
          <button
            type="submit"
            className="btn btn-info  mr-1   "
            // value="Buscar Clima"
          >
            Buscar Clima
          </button>
        </div>
      </div>
    </form>
  );
};

export default Formulario;
