import React from "react";
import { NavLink } from "react-router-dom";


export default function NavBar() {
  return (
    <header className="d-flex justify-content-center py-3 navbar navbar-dark bg-dark">
      <ul className="nav nav-pills">
        <NavLink tabIndex={1} className="nav-item nav-link" to="/tipoEquipos">
          TIPO EQUIPOS
        </NavLink>
        <NavLink tabIndex={2} className="nav-item nav-link" to="/estados">
          ESTADOS
        </NavLink>
        <NavLink tabIndex={3} className="nav-item nav-link" to="/usuarios">
          USUARIOS
        </NavLink>
        <NavLink tabIndex={4} className="nav-item nav-link" to="/marcas">
          MARCAS
        </NavLink>
        <NavLink tabIndex={5} className="nav-item nav-link" to="/inventario">
          INVENTARIO
        </NavLink>
      </ul>
    </header>
  );
}
