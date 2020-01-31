import React from 'react'
import { Link } from 'react-router-dom'
import styles from './DevItem.module.css'

function DevItem({ id, user, avatar }) {
  return (
    <li className={styles.item}>
      <Link to={`/dev/${id}`}>
        <img
          src={avatar}
          alt='Foto do desenvolvedor'
        />
        <p>{user}</p>
      </Link>
    </li>
  )
}

export default DevItem