import React from 'react'
import './Content.css'

import BadgeList from './BadgeList/BadgeList'
import ButtonLanding from '../ButtonLanding/ButtonLanding'

function Content() {
  return (
    <div className="landing-content-container">
      <h1 className="landing-content-title">
        ¿Cansado de que te rastreen? Podemos ayudarte.
      </h1>
      <p className="landing-content-text">
        Consigue protección continua y gratuita para tu privacidad en el
        navegador con una descarga:
      </p>
      <BadgeList
        badges={[
          'Búsqueda Privada',
          'Bloqueo De Rastreadores',
          'Encriptación De Sitios',
        ]}
      />
      <ButtonLanding text="Añadir DuckDuckGo a Chrome" />
      <h4 className="landing-content-text-h4">
        ¡Con la confianza de decenas de millones de personas en todo el mundo!
      </h4>
      <h3 className="landing-content-text-h3">
        Protección de la Privacidad para Cualquier Dispositivo
      </h3>
    </div>
  )
}

export default Content
