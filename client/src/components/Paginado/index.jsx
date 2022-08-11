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
        <ul className="ul pagination">
          <li className="pagination page-item">
            {currentPage !== 1 ? (
              <button
                className="pagination-button page-link"
                onClick={() => paginado(currentPage - 1)}
              >
                {" "}
                {currentPage - 1}
              </button>
            ) : null}
          </li>
          <li className="pagination page-item active">
            <button
              className="pagination-number page-link"
              onClick={() => paginado(currentPage)}
            >
              {currentPage}
            </button>
          </li>
          <li className="pagination page-item">
            {currentPage > pageNumbers.length ? null : (
              <button
                className="pagination-button page-link"
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