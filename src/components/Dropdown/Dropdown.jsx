import React, { useState } from 'react'
import './Dropdown.css'

function Dropdown() {
  const items = [
    {
      label: 'Twitter',
      value: 'twitter',
      image: 'https://duckduckgo.com/assets/icons/header/twitter.svg',
      href: 'https://twitter.com/duckduckgo',
    },

    {
      label: 'Reddit',
      value: 'reddit',
      image: 'https://duckduckgo.com/assets/icons/header/reddit.svg',
      href: 'https://www.reddit.com/r/duckduckgo',
    },

    {
      label: 'Blog',
      value: 'blog',
      image: 'https://duckduckgo.com/assets/icons/header/blog.svg',
      href: 'https://spreadprivacy.com',
    },

    {
      label: 'Newsletter',
      value: 'newsletter',
      image: 'https://duckduckgo.com/assets/icons/header/newsletter.svg',
      href: 'https://duckduckgo.com/newsletter',
    },
  ]

  const [isOpen, setIsOpen] = useState(false)

  function toggleDropdown() {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button
        type="button"
        className="dropdown-button"
        onClick={toggleDropdown}
      >
        <svg
          className="dropdown-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 32 32"
        >
          <title>horn</title>
          <path
            fill="#cccccc"
            fillRule="evenodd"
            // eslint-disable-next-line max-len
            d="M21.41 8c.774 0 1.447.58 1.447 1.311v14.762c0 .732-.64 1.31-1.447 1.31-.192 0-.383-.034-.56-.1a1.47 1.47 0 0 1-.472-.285 1.288 1.288 0 0 1-.312-.426 1.168 1.168 0 0 1-.104-.5v-.212l-3.288-.702v2.927a.832.832 0 0 1-.106.408.947.947 0 0 1-.298.324c-.186.12-.41.184-.64.183-.1 0-.168 0-.27-.031l-8.554-1.95a1.106 1.106 0 0 1-.555-.346.911.911 0 0 1-.221-.57v-3.385l-3.3-.763a1.33 1.33 0 0 1-.522.531 1.557 1.557 0 0 1-1.792-.185 1.289 1.289 0 0 1-.312-.426 1.171 1.171 0 0 1-.104-.5v-5.397c0-.733.64-1.31 1.448-1.31.54 0 1.045.303 1.28.73l17.233-3.874v-.213c0-.733.64-1.311 1.447-1.311h.002zM8.12 21.174v2.166l6.466 1.493v-2.195L8.12 21.174zm16.874-.762c.07-.126.168-.238.288-.33.12-.092.26-.162.41-.204a1.315 1.315 0 0 1 .918.077l3.807 1.83c.271.145.473.375.566.645.094.27.072.56-.06.817a1.08 1.08 0 0 1-.429.425 1.263 1.263 0 0 1-.617.155 1.2 1.2 0 0 1-.571-.122l-3.808-1.83c-.607-.274-.808-.946-.504-1.463zm5.827-4.817c.314.005.613.12.833.32.22.199.344.467.346.746-.002.28-.126.548-.346.747-.22.2-.52.314-.833.32h-4.512a1.28 1.28 0 0 1-.834-.32c-.22-.199-.344-.467-.346-.747.001-.28.125-.548.346-.748.22-.2.52-.314.834-.32l4.512.002zm-1.515-5.947a1.337 1.337 0 0 1 .914-.07c.15.043.29.11.41.201.12.09.219.201.291.326.146.254.175.55.08.823a1.138 1.138 0 0 1-.583.641L26.61 13.4a1.3 1.3 0 0 1-.571.122 1.262 1.262 0 0 1-.617-.156 1.08 1.08 0 0 1-.428-.424.993.993 0 0 1-.08-.823 1.14 1.14 0 0 1 .585-.641l3.807-1.83z"
          />
        </svg>
        <svg
          className="dropdown-icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 32 32"
        >
          <title>down</title>
          <path
            fill="#cccccc"
            d="M15.954 17.629l-8.374-8.335-2.813 2.721 11.188 10.728 11.28-10.772-2.793-2.713z"
          />
        </svg>
      </button>

      <ul className="dropdown-list">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href}>
              <img src={item.image} alt="" />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
