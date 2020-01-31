import React, { useContext, useReducer, useEffect } from 'react'
import DevInfo from './components/DevInfo/DevInfo'
import { useParams } from 'react-router-dom'
import DevsContext from '../../../../state/devs/Context'

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
  const { id } = useParams()
  const { devs } = useContext(DevsContext)
  const retrieveDev = devs.find((dev) => {
    return dev.id === Number(id)
  })
  const [curDev, dispatchToCurDev] = useReducer(curDevReducer, null)
  const devDetailURL = 'https://api.github.com/users/'
  useEffect(() => {
    fetch(devDetailURL + retrieveDev.user)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        console.log(res)
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
    <div>
      {curDev ? <DevInfo {...curDev} /> : null}
    </div>
  )
}

export default Dev