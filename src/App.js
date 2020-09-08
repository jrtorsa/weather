import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {
  //state del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const [consultar, guardarConsultar] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      const appId = "9bec8fc130d2715d9b5bb420214d80ec";
    };
    consultarAPI();
  }, [consultar]);

  return (
    <>
      <Header titulo="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
