import React from 'react'
import { Link } from 'react-router-dom'
import styles from './BackButton.module.css'

// Botão para voltar para a página principal
function BackButton() {
  return (
    <Link className={styles.button} to='/'>
      <p>Voltar</p>
    </Link>
  )
}

export default BackButton