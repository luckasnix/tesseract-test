import React from 'react'

function DevInfo({ name, publicRepos, followers, following, createdAt }) {
  return (
    <div>
      <h1>Nome: {name}</h1>
      <h2>Resitórios públicos: {publicRepos}</h2>
      <h2>Seguidores: {followers}</h2>
      <h2>Seguindo: {following}</h2>
      <h2>No GitHub desde: {createdAt}</h2>
    </div>
  )
}

export default DevInfo