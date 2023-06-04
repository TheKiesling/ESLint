import React, { useState } from 'react'
import './Landing.css'

import Dropdown from '../../components/Dropdown/Dropdown'
import SideBar from '../../components/SideBar/SideBar'
import Logo from '../../components/Logo/Logo'
import Search from '../../components/Search/Search'
import Cards from '../../components/Cards/Cards'
import Content from '../../components/Content/Content'

function Landing() {
  const cards = [
    {
      image: 'https://duckduckgo.com/assets/add-to-browser/cppm/laptop.svg',
      title: 'Privacidad para Chrome',
      content:
        // eslint-disable-next-line max-len
        'Navega como siempre y nosotros nos encargamos del resto. Te ofrecemos buscador, bloqueador de rastreadores y mejora de encriptación todo en una',
      link: 'extensión de Chrome',
      dot: false,
    },
    {
      image: 'https://duckduckgo.com/assets/home/landing/icons/search.svg',
      title: 'Motor de Búsqueda Privada',
      content:
        // eslint-disable-next-line max-len
        'Busca de forma privada con nuestra app o extensión, añade búsqueda web privada a tu navegador preferido o busca en',
      link: 'duckduckgo.com',
      dot: true,
    },
    {
      image: 'https://duckduckgo.com/assets/add-to-browser/cppm/mobile.svg',
      title: 'Navegador Privado',
      content:
        // eslint-disable-next-line max-len
        'Nuestro navegador privado para móviles viene equipado con nuestro motor de búsqueda, bloqueador de rastreadores, mejora de encriptación y más. Disponible para',
      link: 'iOS y Android',
      dot: true,
    },
  ]

  const [isOpen, setIsOpen] = useState(false)

  function toggleSideBar() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="section-landing">
      <div className="header-container">
        <div className="header-aside">
          <Dropdown />
          <button
            type="button"
            className="sidebar-icon"
            onClick={toggleSideBar}
            aria-hidden="true"
          >
            <svg
              className="menu-icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 32 32"
            >
              <title>menu</title>
              <path fill="#cccccc" d="M0 4h30v4h-30v-4z" />
              <path fill="#cccccc" d="M0 14h30v4h-30v-4z" />
              <path fill="#cccccc" d="M0 24h30v4h-30v-4z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="content-container">
        <Logo />
        <Search />

        <Content />
        <Cards cards={cards} />
      </div>

      <div className={`real-sidebar ${isOpen ? 'open' : ''}`}>
        <button
          className="sidebar-close"
          onClick={toggleSideBar}
          aria-hidden="true"
          type="button"
        >
          ✕
        </button>

        <SideBar />
      </div>

      <svg
        className="curve"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1438 134"
      >
        <path
          d="M1438 1442H0V31.001S438.105 0 719 .001c280.896 0 719 31 719 31V1442z"
          fill="#58b792"
        />
      </svg>
    </div>
  )
}

export default Landing
