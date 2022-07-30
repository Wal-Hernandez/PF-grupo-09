import React from "react";
import { Link } from "react-router-dom";
function NoPermissions() {
  return (
    <div>
      <button>
        <Link to="/">Volver al home</Link>
      </button>
      <h2>No tienes autorizada la entrada a esta pagina</h2>
    </div>
  );
}

export default NoPermissions;
