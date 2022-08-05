import React, { useState } from 'react'

function AutocompleteSearch({fieldInput}) {

    const [filter, setFilter] = useState([]);
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [show, setShow] = useState(false);
    const [input, setInput] = useState("");
    const [selected, setSelected] = useState([]);
  
    const handleChange = (e) => {
      const userInput = e.target.value;
  
      const filtered = fieldInput.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
      setInput(e.target.value);
      setFilter(filtered);
      setSuggestionIndex(0);
      setShow(true);
    };
  
    const handleClick = (e) => {
      setFilter([]);
      setSelected((prevState)=>[...prevState, e.target.innerText])
      setInput('');
      setSuggestionIndex(0);
      setShow(false);
    };
  
    function List() {
      return filter.length ? (
        <>
        <ul>
          {filter.map((suggestion, index) => {
            let classname;
            if (index === suggestionIndex) {
              classname = "style.suggestion-active";
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
        <div>
          <p>No se encuentra ninguna actividad o destino</p>
        </div>
      );
    }
  
    return (
      <div>
        <input
          placeholder="Buscar por Destino o Actividad"
          type="text"
          onChange={handleChange}
          // onKeyDown={onKeyDown}
          value={input}
          tempvalue = {selected}
        />
        {show && input && <List/>}
        <div><p> {selected.map(e => e)} </p></div>
      </div>
    );
}

export default AutocompleteSearch