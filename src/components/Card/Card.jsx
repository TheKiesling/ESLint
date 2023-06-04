import React from 'react'
import './Card.css'

import PropTypes from 'prop-types' // Import PropTypes

function Card({ card }) {
  return (
    <div className="card-container">
      <img src={card.image} alt={card.title} />
      <h3>{card.title}</h3>
      <p>
        {card.content}
        <span
          style={{
            color: '#678fff',
          }}
        >
          {` ${card.link}`}
        </span>
        {card.dot ? '.' : null}
      </p>
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    dot: PropTypes.bool.isRequired,
  }).isRequired,
}

export default Card
