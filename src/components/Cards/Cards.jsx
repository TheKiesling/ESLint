import React from 'react'
import './Cards.css'
import PropTypes from 'prop-types' // Import PropTypes

import Card from '../Card/Card'

function Cards({ cards }) {
  return (
    <div className="cards-wrapper">
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      dot: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
}

export default Cards
