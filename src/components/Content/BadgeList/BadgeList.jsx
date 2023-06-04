import React from 'react'
import './BadgeList.css'

import PropTypes from 'prop-types' // Import PropTypes

function BadgeList({ badges }) {
  const badgeItems = badges.map((badge) => (
    <div className="badge-item" key={badge.toString()}>
      <svg
        className="check badge-link__bullet-check"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="8" fill="#678FFF" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          // eslint-disable-next-line max-len
          d="M4.45723 7.54277C4.0667 7.9333 4.0667 8.56646 4.45723 8.95698L5.88758 10.3873L5.88747 10.3875L6.5432 11.0432C6.95322 11.4532 7.62489 11.4297 8.00519 10.992L11.8251 6.59531C12.1687 6.19989 12.1479 5.60609 11.7775 5.23569C11.3684 4.82668 10.6984 4.85016 10.3191 5.28681L7.20253 8.87386L5.87144 7.54277C5.48092 7.15225 4.84775 7.15225 4.45723 7.54277Z"
          fill="white"
        />
      </svg>
      <li>{badge}</li>
    </div>
  ))

  return <div className="badge-list">{badgeItems}</div>
}

BadgeList.propTypes = {
  badges: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default BadgeList
