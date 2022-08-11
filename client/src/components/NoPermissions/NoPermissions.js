import React from "react";
import { Link } from "react-router-dom";
import "./NoPermissions.css";

function NoPermissions() {
  return (
    <div className="nopermissions">
      <h2>No tienes autorizada la entrada a esta pagina</h2>
      <button class="btn">
        <Link to="/">Volver</Link>
      </button>
    </div>
  );
}

export default NoPermissions;
