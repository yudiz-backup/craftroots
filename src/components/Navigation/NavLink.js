import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

function NavLink({ title, path, className }) {
  return (
    <li>
      <Link href={path} className={`nav-link ${className}`}>
        {title}
      </Link>
    </li>
  )
}

export default NavLink
NavLink.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
}

NavLink.defaultProps = {
  className: '',
}
