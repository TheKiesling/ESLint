import React from 'react'
import './Footer.css'

import ButtonFooter from '../../components/ButtonFooter/ButtonFooter'

function Footer() {
  return (
    <div className="section-footer">
      <div className="content">
        <h1 className="title-footer">
          No guardamos tu información
          <br />
          personal. Y nunca lo haremos.
        </h1>
        <p className="text-footer">
          Nuestra política de privacidad es simple: No colectamos
          <br />o compartimos ninguna información personal tuya.
        </p>
        <div className="button-container">
          <ButtonFooter text="Instalar DuckDuckGo" />
        </div>
      </div>

      <div className="image-container">
        <img
          alt=""
          className="image-footer"
          src="https://duckduckgo.com/assets/onboarding/bathroomguy/1-monster-v2--pre-animation.svg"
        />
      </div>
    </div>
  )
}

export default Footer
