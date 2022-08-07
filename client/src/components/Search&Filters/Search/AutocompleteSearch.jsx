import React, { useState } from "react";
import "./search.css";

function AutocompleteSearch({ fieldInput, input, setInput, setDestination }) {
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [filter, setFilter] = useState([]);
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const userInput = e.target.value;

    const filtered = fieldInput.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setSuggestionIndex(0);
    setFilter(filtered);
    setShow(true);
    setDestination(e.target.value);
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    setSuggestionIndex(0);
    setFilter([]);
    setShow(false);
    setDestination(e.target.innerText);
    setInput(e.target.innerText);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      setSuggestionIndex(0);
      setShow(false);
      setDestination(filter[suggestionIndex]);
      setInput(filter[suggestionIndex]);
    } else if (e.keyCode === 38) {
      if (suggestionIndex === 0) {
        return;
      }
      setSuggestionIndex(suggestionIndex - 1);
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (suggestionIndex - 1 === filter.length) {
        return;
      }
      setSuggestionIndex(suggestionIndex + 1);
    }
  };

  function List() {
    return filter.length ? (
      <>
        <ul className="suggestions">
          {filter.map((suggestion, index) => {
            let classname;
            if (index === suggestionIndex) {
              classname = "suggestion-active";
            }
            return (
              <li className={classname} key={suggestion} onClick={handleClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      </>
    ) : (
      <div className="no-suggestions">
        <p>No se encuentra ninguna ciudad de destino</p>
      </div>
    );
  }

  return (
    <div>
      <input
        placeholder="Buscar por ciudad de destino"
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={input}
      />
      {show && <List />}
    </div>
  );
}

export default AutocompleteSearch;
