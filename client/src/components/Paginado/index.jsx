import React from "react";
import "./paginado.css";

export default class Paginado extends React.Component {
  render() {
    const { packages, packagesPerPage, paginado, currentPage } = this.props;
    const pageNumbers = [];

    for (let i = 1; i < Math.ceil(packages / packagesPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <nav className="nav-pag">
        <ul className="ul">
          <li className="pagination">
            {currentPage !== 1 ? (
              <button
                className="pagination-button"
                onClick={() => paginado(currentPage - 1)}
              >
                {" "}
                {currentPage - 1}
              </button>
            ) : null}
          </li>
          <li className="pagination">
            <button
              className="pagination-number"
              onClick={() => paginado(currentPage)}
            >
              {currentPage}
            </button>
          </li>
          <li className="pagination">
            {currentPage > pageNumbers.length ? null : (
              <button
                className="pagination-button"
                onClick={() => paginado(currentPage + 1)}
              >
                {currentPage + 1}
              </button>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}