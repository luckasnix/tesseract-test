import React, { useReducer, useEffect } from 'react'
import DevInfo from './components/DevInfo/DevInfo'
import BackButton from './components/BackButton/BackButton'
import { useParams } from 'react-router-dom'
import styles from './CurDev.module.css'

// Tipo de ação que define o desenvolvedor atual
const SET_CURRENT_DEVELOPER = 'SET_CURRENT_DEVELOPER'

// Ação que define o desenvolvedor atual
function setCurrentDeveloper(dev) {
  return {
    type: SET_CURRENT_DEVELOPER,
    payload: { dev }
  }
}

// Função redutora do estado local do desenvolvedor atual
function curDevReducer(_, action) {
  switch (action.type) {
    case SET_CURRENT_DEVELOPER:
      return action.payload.dev
    default:
      throw new Error('Invalid action!')
  }
}

// URL da API do GitHub que dá acesso aos detalhes de um desenvolvedores
const devDetailURL = 'https://api.github.com/users/'

// Contêiner de busca de informações de desenvolvedor
function Dev() {
  // Nome de usuário de um desenvolvedor do Grupo Tesseract recuperado da URL
  const { user } = useParams()
  const [curDev, dispatchToCurDev] = useReducer(curDevReducer, null)
  async function fetchCurrentDeveloper() {
    // Busca dos dados referente ao desenvolvedor
    await fetch(devDetailURL + user)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        // Filtragem dos dados que interessam do desenvolvedor
        const fetchedDev = {
          name: res.name,
          publicRepos: res.public_repos,
          followers: res.followers,
          following: res.following,
          createdAt: res.created_at
        }
        // Despacho dos dados filtrados para o estado local
        dispatchToCurDev(setCurrentDeveloper(fetchedDev))
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    fetchCurrentDeveloper()
  // eslint-disable-next-line
  }, [])
  return (
    <div className={styles.container}>
      {curDev ? <DevInfo {...curDev} /> : null}
      <BackButton/>
    </div>
  )
}

export default Dev