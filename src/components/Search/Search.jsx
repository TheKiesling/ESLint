import React from 'react'
import './Search.css'

function Search() {
  return (
    <form className="search-form">
      <input
        className="search-input"
        type="text"
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        placeholder="Busca en la red sin que te rastreen"
      />
      {/* TODO add X when writting */}

      <input className="search-button" type="submit" value="🔎︎" />
    </form>
  )
}

export default Search
