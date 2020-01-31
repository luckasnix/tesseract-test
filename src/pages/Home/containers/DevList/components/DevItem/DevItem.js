import React from 'react'
import { Link } from 'react-router-dom'

function DevItem({ id, user, avatar }) {
  return (
    <li>
      <Link to={`/dev/${id}`}>
        <img
          src={avatar}
          alt='Foto do desenvolvedor'
        />
        <span>{user}</span>
      </Link>
    </li>
  )
}

export default DevItem