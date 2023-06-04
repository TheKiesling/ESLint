import React from 'react'
import './ButtonLanding.css'

import PropTypes from 'prop-types' // Import PropTypes

function ButtonLanding({ text }) {
  return (
    <button type="button" className="button-landing">
      {text}
    </button>
  )
}

ButtonLanding.propTypes = {
  text: PropTypes.string.isRequired, // Add validation for the "text" prop
}

export default ButtonLanding
