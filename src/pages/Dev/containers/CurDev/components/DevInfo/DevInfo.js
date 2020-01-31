import React from 'react'
import styles from './DevInfo.module.css'

function formatDate(date) {
  const monthArr = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
  const objDate = new Date(date)
  const day = objDate.getDate()
  const month = monthArr[objDate.getMonth()]
  const year = objDate.getFullYear()
  return `${day} de ${month} de ${year}`
}

function DevInfo({ name, publicRepos, followers, following, createdAt }) {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <td>Nome:</td>
          <td>{name}</td>
        </tr>
        <tr>
          <td>Resitórios públicos:</td>
          <td>{publicRepos}</td>
        </tr>
        <tr>
          <td>Seguidores:</td>
          <td>{followers}</td>
        </tr>
        <tr>
          <td>Seguindo:</td>
          <td>{following}</td>
        </tr>
        <tr>
          <td>No GitHub desde:</td>
          <td>{formatDate(createdAt)}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default DevInfo