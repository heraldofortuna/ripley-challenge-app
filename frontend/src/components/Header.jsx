import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <h1>Ripley Challenge</h1>
        <nav>
          <Link to="/create">Añadir un cliente</Link>
          <Link to="/">Lista de clientes</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;