import React, { useReducer, useEffect } from 'react'
import DevInfo from './components/DevInfo/DevInfo'
import BackButton from './components/BackButton/BackButton'
import { useParams } from 'react-router-dom'
import styles from './CurDev.module.css'

const SET_CURRENT_DEVELOPER = 'SET_CURRENT_DEVELOPER'

function setCurrentDeveloper(dev) {
  return {
    type: SET_CURRENT_DEVELOPER,
    payload: { dev }
  }
}

function curDevReducer(_, action) {
  switch (action.type) {
    case SET_CURRENT_DEVELOPER:
      return action.payload.dev
    default:
      throw new Error('Invalid action!')
  }
}

function Dev() {
  const { user } = useParams()
  const [curDev, dispatchToCurDev] = useReducer(curDevReducer, null)
  const devDetailURL = 'https://api.github.com/users/'
  useEffect(() => {
    fetch(devDetailURL + user)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        const fetchedDev = {
          name: res.name,
          publicRepos: res.public_repos,
          followers: res.followers,
          following: res.following,
          createdAt: res.created_at
        }
        dispatchToCurDev(setCurrentDeveloper(fetchedDev))
      })
      .catch((err) => {
        console.log(err)
      })
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