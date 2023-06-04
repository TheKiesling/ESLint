import React from 'react'
import './ButtonFooter.css'

import PropTypes from 'prop-types' // Import PropTypes

function ButtonFooter({ text }) {
  return (
    <button type="button" className="button-footer">
      {text}
    </button>
  )
}

ButtonFooter.propTypes = {
  text: PropTypes.string.isRequired,
}

export default ButtonFooter
