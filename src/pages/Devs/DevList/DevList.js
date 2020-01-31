import React, { useContext, useEffect } from 'react'
import DevsContext from '../../../state/devs/Context'
import * as devsActions from '../../../state/devs/actions'

const devListURL = 'https://api.github.com/orgs/grupotesseract/public_members'

function DevList() {
  const { devs, dispatchToDevs } = useContext(DevsContext)
  useEffect(() => {
    fetch(devListURL)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        const fetchedDevs = res.map((cur) => {
          return {
            id: cur.id,
            user: cur.login,
            avatar: cur.avatar_url
          }
        })
        dispatchToDevs(devsActions.createDevList(fetchedDevs))
      })
      .catch((err) => {
        console.log(err)
      })
  // eslint-disable-next-line
  }, [])
  return (
    <div>
      {devs.length ? (
        <ul>
          {devs.map((dev) => {
            return (
              <li key={dev.id}>
                <img
                  src={dev.avatar}
                  alt='Foto do desenvolvedor'
                />
                <span>{dev.user}</span>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

export default DevList